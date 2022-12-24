import styled from "styled-components"

function Footer() {
  return (
    <FooterStyle>
        <h4>Created by Rrezart Hetemi</h4>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    background: linear-gradient(to right, #f27121, #e94057);
    border-radius: 20px 20px 0px 0px;
    h4{
        font-size: 12px;
        margin: 16px;
        color: white;
        text-align: center;
    }
`

export default Footer