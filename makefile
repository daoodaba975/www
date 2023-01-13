make i :
	npm install

make r :
	npm run dev

make f :
	$env:NODE_OPTIONS = "--openssl-legacy-provider"
	