import transport from '../../config/mail'

export default {
   key: 'RegistrationMail',  
   async handle({ data }){

    const { user } = data;
    await transport.sendMail({
        from:'Marcos <queue@queue@queuetest.com.br>',
        to: `${user.name} <${user.email}}>`,
        subject:'Cadastro de usuario',
        html:`Olá ${user.name}, bem vindo ao sistema de filas`
    })
   }
}