trap "kill 0" EXIT
JS_PORT=$(($PORT + 1))
json-server --watch ./mock-server/db.json -p $JS_PORT &
next start -p $PORT &
wait
