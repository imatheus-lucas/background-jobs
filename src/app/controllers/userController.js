import transport from "../../config/mail"

export default {
    async store(req, res){
        const { name, email, password } = req.body


        const user = {
            name,email, password
        }

        await  transport.sendMail({
            from:'Marcos <queue@queue@queuetest.com.br>',
            to: `${name} <${email}>`,
            subject:'Cadastro de usuario',
            html:`Olá ${name}, bem vindo ao sistema de filas`
        })
        return res.json(user)
    }
}