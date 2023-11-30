import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Radio, Button } from 'antd';

function DokterPayment() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handlePaymentSelect = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleContinue = () => {
    // Lakukan sesuatu dengan metode pembayaran yang dipilih
    console.log(`Metode Pembayaran Terpilih: ${selectedPayment}`);
    // Redirect atau lakukan tindakan selanjutnya sesuai kebutuhan
  };

  return (
    <div className='container-xl margin-top-100'>
      <button
        className='btn btn-outline-secondary back-button mb-5'
        onClick={handleBack}
      >
        <i className='fas fa-arrow-left'></i> Kembali
      </button>
      <div className='main-content'>
        <h1>Pilih Metode Pembayaran</h1>
        <Radio.Group onChange={handlePaymentSelect} value={selectedPayment}>
          <Radio value='creditCard'>Kartu Kredit</Radio>
          <Radio value='bankTransfer'>Transfer Bank</Radio>
          <Radio value='ewallet'>Dompet Elektronik</Radio>
        </Radio.Group>

        <Button
          type='primary'
          className='mt-3 mb-5'
          onClick={handleContinue}
          disabled={!selectedPayment}
        >
          Lanjutkan Pembayaran
        </Button>
      </div>
    </div>
  );
}

export default DokterPayment;
