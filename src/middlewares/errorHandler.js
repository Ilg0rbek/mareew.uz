import { writeFile, appendFile } from "fs/promises";
import { resolve } from "path";

export async function errorHandler(err, req, res, next) {
    const errorsPath = resolve(process.cwd(), "errors.txt");
    try {
        if (!isErrorWithStatusCode(err)) {
            const errorString = `MESSAGE ${err.message} STACK ${err.stack?.split('\n')} TIME ${new Date()} \n`;
            await appendFile(errorsPath, errorString)
        }
    } catch (err) {
        await writeFile(errorsPath, `MESSAGE ${err.message} STACK ${err.stack?.split('\n')} TIME ${new Date()}`)
    } finally {
        if(!isErrorWithStatusCode(err)) {
            console.log(err)
            return res.status(500).json({ ok: false, error: `Internal Server Error` })
        } else {
            return res.status(err.statusCode).json({ ok: false, error: err.message });
        }
    }
}

function isErrorWithStatusCode(error) {
    return error.constructor.name === 'ErrorWithStatusCode' 
}