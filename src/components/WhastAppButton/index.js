import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const WhatsAppButton = () => {
    return (
        <WhatsAppWidget placeholder='Escreva sua mensagem' phoneNumber='5535999958236' message="Olá! Tudo bem? Como podemos lhe atender?" sendButton='Enviar' companyName='Empório Santana' textReplyTime='Faça já seu pedido🍔🍺'/>
    )
}

export default WhatsAppButton;
