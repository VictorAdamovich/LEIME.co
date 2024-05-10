DEFAULT_ENV_FILE=".env.default"
ENV_BRANCHES="$2"
CURRENT_BRANCH=$1

echo "current branch: ${CURRENT_BRANCH}"

for BRANCH in ${ENV_BRANCHES}; do
  if [ "${CURRENT_BRANCH}" == "${BRANCH}"  ]; then
    CURRENT_ENV_FILE=".env.${CURRENT_BRANCH}"
    echo "exporting variables from ${CURRENT_ENV_FILE} to .env.local file"
    # cat ${CURRENT_ENV_FILE}
    cat ${CURRENT_ENV_FILE} > .env.local
    echo "Done!"    
  fi
  # echo "removing .env.${BRANCH}"
  # rm .env.${BRANCH}
done

if [ -z "${CURRENT_ENV_FILE}" ]; then
    echo "exporting variables from ${DEFAULT_ENV_FILE} to .env.local file"
    cat ${DEFAULT_ENV_FILE} > .env.local
    echo "Done!"        
fi

# echo "removing ${DEFAULT_ENV_FILE}"
# rm ${DEFAULT_ENV_FILE}
