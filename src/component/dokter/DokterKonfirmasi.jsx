import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DokterKonfirmasi() {
  const navigate = useNavigate();

  const handleChatNow = () => {
    navigate('/chat');
  };

  return (
    <Container className='mt-5 mb-5 p-5 text-center border rounded'>
      <h1>Pembayaran Berhasil!</h1>
      <p>
        Terima kasih telah melakukan pembayaran. Konsultasi dengan dokter Anda
        segera dimulai.
      </p>

      <Button variant='primary' onClick={handleChatNow}>
        Chat Dokter Sekarang
      </Button>
    </Container>
  );
}

export default DokterKonfirmasi;
