function clourUrl(){
    
    this.imageUrl = (file) => {
        console.log(file)
        const { Storage } = require("@google-cloud/storage")
        var uid = require("uuid")
        var uidv1 = uid.v1
        require("dotenv").config()
        const storage = new Storage({ projectId: process.env.GCLOUD_PROJECT, credentials: { client_email: process.env.GCLOUD_CLIENT_EMAIL, private_key: process.env.GCLOUD_PRIVATE_KEY } })
        const bucket = storage.bucket(process.env.GCS_BUCKET)

        const newFileName = uidv1() + "-" + file.originalname
        const doc = bucket.file('All-Images/' + newFileName)
        const blogStream = doc.createWriteStream({ resumable: false })


        return new Promise((resolve, reject) => {
            blogStream.on("error", err => reject(err))
            blogStream.on("finish", () => {
                const publicUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET}/${doc.name}`
                resolve(publicUrl)
            })
            blogStream.end(file.buffer)
        })
    }
}

module.exports = new clourUrl()
