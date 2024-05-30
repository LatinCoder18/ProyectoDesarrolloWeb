const generarJWT = require('../helpers/Autorization');
const users = [
    { id: 1, name: 'Alexandre', email: 'prueba@gmail.com', password: '123456' },
    { id: 2, name: 'Lucas', email: 'lucas@gmail.com', password: '123456' },
]

module.exports = {
    async login(req, res) {
        const { email, password } = req.body;
        let user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = await generarJWT(user.id);
        res.json({ user, token });
    }
}