#!/bin/bash

# VercelのダッシュボードでIgnored Build Stepにこのシェルを追加すること

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

###
## プレビューデプロイを実施しない条件を以下に追加
#
if [[ "$VERCEL_GIT_COMMIT_REF" == "gh-pages" ]] ; then
  echo "🛑 - Build cancelled"
  exit 0;

###
## 条件に合致しない場合は、プレビューデプロイを実施
#
else
  # Don't build
  echo "✅ - Build can proceed"
  exit 1;
fi
