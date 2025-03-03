import bcrypt from "bcryptjs";

const saltRounds = 10;

async function hash(code) {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(code, salt);
}

async function compare(code, hash) {
    return await bcrypt.compare(code, hash);
}




export { hash, compare };
