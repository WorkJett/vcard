import {useState, useEffect} from 'react'

import {
  Body,
  Container,
  Title,
  Field,
  Submit,
  Back,
  QRCodeContainer,
  QRCode,
  Download
} from './styled'

export const App = () => {
  const [fname, setFname] = useState('')
  const [sname, setSname] = useState('')
  const [phone, setPhone] = useState('')
  const [is_code, setIsCode] = useState(false)

  useEffect(() => {
    if (is_code) {
      window.setTimeout(() => {
        const vcard_parts = []
        vcard_parts.push('BEGIN:VCARD')
        vcard_parts.push('VERSION:3.0')
        vcard_parts.push(`N:${sname};${fname}`)
        vcard_parts.push(`TEL;TYPE=cell:${phone}`)
        vcard_parts.push('END:VCARD')
        const vcard = vcard_parts.join('\n')

        const qrcode = new window.QRCode('qr_code', {
          text: vcard,
          width: 256,
          height: 256,
          colorDark : "#000000",
          colorLight : "#ffffff"
        })
        window.setTimeout(() => {
          const img_el = window.document.querySelector('div#qr_code img')
          const a_el = window.document.querySelector('a#download')
          a_el.href = img_el.src
        }, 0)
      }, 0)
    }
  }, [is_code])

  const genQr = e => {
    e.preventDefault()
    if (!fname || !sname || !phone) return
    setIsCode(true)
  }

  const back = () => {
    setIsCode(false)
  }

  const download = () => {
  }

  return (
    <Body>
      <Container>
        {is_code ? (
          <>
            <Back onClick={back}>Назад</Back>
            <QRCodeContainer>
              <QRCode></QRCode>
            </QRCodeContainer>
            <Download id={'download'} download="qrcode.png">Скачать</Download>
          </>
        ) : (
          <form onSubmit={genQr}>
            <Title>Имя</Title>
            <Field required value={fname} onChange={e => setFname(e.target.value)} />
            <Title>Фамилия</Title>
            <Field required value={sname} onChange={e => setSname(e.target.value)} />
            <Title>Номер телефона</Title>
            <Field required value={phone} onChange={e => setPhone(e.target.value)} />
            <Submit>Получить QR-Код</Submit>
          </form>
        )}
      </Container>
    </Body>
  )
}
