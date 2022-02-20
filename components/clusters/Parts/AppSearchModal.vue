<template>
  <div class="AppSearchModal">
    <b-modal
      v-model="isModalActive"
      has-modal-card
      aria-role="dialog"
      aria-label="search modal"
      aria-modal
      scroll="keep"
      animation="fade"
      :can-cancel="['escape', 'outside']"
    >
      <div class="modal-card">
        <section class="modal-card-body">
          <div class="AppSearchModal__SearchBox">
            <div class="columns">
              <div class="column is-10-desktop is-10-tablet is-12-mobile">
                <b-field>
                  <b-input
                    v-model="searchText"
                    placeholder="検索キーワードを入力..."
                    type="search"
                    autocomplete="off"
                    size="is-medium"
                    icon="magnify"
                    class="search-input"
                  >
                  </b-input>
                </b-field>
              </div>
              <div class="column is-2-desktop is-2-tablet is-12-mobile">
                <b-button
                  class="AppSearchModal__CloseButton"
                  label="閉じる"
                  size="is-medium"
                  @click="closeModal()"
                />
              </div>
            </div>
          </div>
          <div
            v-if="searchedArticles.length > 0"
            class="AppSearchModal__PostList"
          >
            <div v-for="(article, index) in searchedArticles" :key="article.id">
              <AppArticle :article="article" @link-click="closeModal()" />
              <hr
                v-if="index < searchedArticles.length - 1"
                :key="`hr-${article.id}`"
              />
            </div>
          </div>
          <div v-else>
            <div>
              <article class="AppSearchModal__NotFound">
                <h2 class="AppSearchModal__NotFoundTitle">
                  見つかりませんでした。
                </h2>
              </article>
            </div>
          </div>
        </section>
      </div>
    </b-modal>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  useContext,
  watch,
} from '@nuxtjs/composition-api'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Context } from '@nuxt/types'

import { Article } from '~/store'

import useSearchPosts from '@/composables/useSearchPosts'

/**
 * 検索モーダル
 *
 * 検索キーワードを入力し、ヒットした記事を表示するモーダル画面のコンポーネント。
 * 検索前の初期表示では、検索結果には全記事の一覧を投稿日時の降順で表示しておく。
 *
 * モーダルはbuefyの`modal`コンポーネントをベースに作成。
 * `:active="isActive"`がtrueになるとモーダルが表示。
 * `emit('close')`でモーダルを閉じる。
 *
 * https://buefy.org/documentation/modal/
 *
 * スタイルはbulmaの`modal-card`をベースに見た目を調整している。
 * bulmaの`modal-card`に適用されるスタイルは以下を参照。
 *
 * https://bulma.io/documentation/components/modal/#modal-card
 */
export default defineComponent({
  name: 'AppSearchModal',
  props: {
    /**
     * モーダルの表示の有効化。
     * b-modalのv-modelと連動する。
     */
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  emits: [
    /**
     * モーダル画面を閉じるとき。
     */
    'close',
  ],
  setup(props, { emit }) {
    const searchText = ref('')
    const searchedArticles = ref<Article[]>([])

    const context = useContext()

    const closeModal = () => {
      emit('close')
    }

    const isModalActive = computed({
      get: () => props.isActive,
      set: (val: boolean) => (!val ? closeModal() : undefined),
    })

    onMounted(() => {
      // 初期表示は全記事一覧
      searchedArticles.value = context.app.$accessor.articles
    })

    const search = async () => {
      searchedArticles.value = await useSearchPosts(
        searchText,
        context as unknown as Context
      )
    }

    watch(searchText, () => {
      // 検索キーワードが変わったら再検索
      search()
    })

    return {
      isModalActive,
      closeModal,
      searchedArticles,
      searchText,
    }
  },
})
</script>
<style lang="scss">
.AppSearchModal {
  .modal {
    .modal-background {
      background-color: rgba(30, 30, 30, 0.6) !important;
    }
    .modal-card {
      width: auto;
      min-width: 900px;
      max-width: 960px;
      height: calc(100vh - 40px);
      margin: 0 auto;
      border-radius: $border-radius2;
      @media (max-width: $tablet) {
        min-width: 90%;
        max-width: 92%;
        height: calc(100vh - 80px);
        border-radius: $border-radius4;
      }
      .modal-card-body {
        padding: $scale36;
        overflow: scroll;
        @media (max-width: $tablet) {
          padding: $scale24;
        }
      }
    }
  }
  &__SearchBox {
    margin-bottom: $scale24;
    @media (max-width: $tablet) {
      margin-bottom: $scale12;
    }
  }
  &__CloseButton {
    display: block;
    width: 100%;
    margin: 0 0 0 auto;
    color: $link-gray-color;
    @media (max-width: $tablet) {
      width: 100%;
      margin-bottom: $scale12;
    }
  }
  // &__PostList {
  // }
  &__NotFound {
    min-width: 900px;
    min-height: 120px;
  }
  &__NotFoundTitle {
    padding: $scale12;
    margin-top: $scale8;
    font-size: $font-size-124rem;
    color: $text;
  }
}
</style>
