import moongoose from 'mongoose';

const connectDB = async () => {
    try {
        const con = await moongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useCreateIndex:true,
            useNewUrlParser:true
        });
        console.log(`Mongodb connected ${con.connection.host}`.cyan.underline.bold);
    }catch (e) {
        console.error(e.message.red.underline);
        process.exit(1);
    }
}

export default connectDB;