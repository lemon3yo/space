import { getApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// Get a non-default Storage bucket
const firebaseApp = getApp()
const storage = getStorage(firebaseApp, 'gs://api-server-d7e3d.appspot.com')
