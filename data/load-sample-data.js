require('dotenv').config({ path: __dirname + '/../.env' })
const fs = require('fs')

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once
// e.g. const Store = require('../models/Store');

// import the associated files per model
// e.g. const stores = JSON.parse(fs.readFileSync(__dirname + '/stores.json', 'utf-8'));

async function deleteData() {
	console.log('😢😢 Goodbye Data...')
	//delete each model
	//e.g. await Store.remove();
	console.log('Data Deleted. To load sample data, run\n\n\t npm run sample\n\n')
	process.exit()
}

async function loadData() {
	try {
		// insert data as per model and json file
		// await Store.insertMany(stores);
		console.log('👍👍👍👍👍👍👍👍 Done!')
		process.exit()
	} catch (e) {
		console.log(
			'\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n'
		)
		console.log(e)
		process.exit()
	}
}
if (process.argv.includes('--delete')) {
	deleteData()
} else {
	loadData()
}
