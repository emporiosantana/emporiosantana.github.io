import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button'


const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='modal'>
                        <div className="modulo_horario">
                            <div>
                                <h2 className="titulo_horario">Horário de funcionamento</h2>
                            </div>

                            <div className="formatos">
                                <div className="info restaurante">
                                    <h2 className="formato">Restaurante</h2>
                                    <p>terça a domingo</p>
                                    <p>18h - 24h</p>
                                </div>
                                <div className="info">
                                    <h2 className="formato">Delivery</h2>
                                    <p>terça a quinta</p>
                                    <p>18h - 24h</p>
                                </div>
                            </div>
                            <div className="endereco">
                                <p><img className="icone_local" src='./images/localizacao.png' alt='icone com endereco do estabelecimento' />Av. São Franciso, 989 - Jd. Esplanada</p>
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}