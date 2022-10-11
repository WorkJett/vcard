import styled from 'styled-components'

export const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

export const Container = styled.div`
  width: calc(100% - 40px);
  max-width: 400px;
  maring: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  box-sizing: border-box;
`

export const Title = styled.div`
  font-size: 18px;
  box-sizing: border-box;

  &:not(:first-child) {
    margin-top: 24px;
  }
`

export const Field = styled.input`
  width: 100%;
  margin-top: 16px;
  box-sizing: border-box;
`

Field.defaultProps = {
  type: 'text'
}

const Button = styled.button`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
`

export const Submit = styled(Button)`
  margin-top: 16px;
`

Submit.defaultProps = {
  type: 'submit'
}

export const QRCodeContainer = styled.div`
  height: 256px;
  min-width: 256px;
  display: flex;
  justify-content: center;
`

export const QRCode = styled.div`
  width: 256px;
  height: 256px;
`

QRCode.defaultProps = {
  id: 'qr_code'
}

export const Back = styled(Button)`
  margin-bottom: 16px;
`

export const Download = styled.a`
  margin-top: 16px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid black
`
