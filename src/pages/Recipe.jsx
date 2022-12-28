import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`
    https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id])

  return (
    <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="" />
        </div>
        <Info>
          <Button 
            className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button 
            className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>

          {activeTab === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
              <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <ul>
              {details.extendedIngredients.map((ingredient) => {
                return (
                  <li key={ingredient.id}>{ingredient.original}</li>
                )
              })}
            </ul>
          )}
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  justify-items: space-between;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
    max-width: 50%;
  }
  li{
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul{
    margin: 2rem 1rem;
  }
  img{
    max-width: 20vw;
    border-radius: 1rem;
  }
  button{
    cursor: pointer;
    transition: all 0.2s ease-in;
    :hover{
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 640px) {
    margin: 32px 0px;
    flex-direction: column;
    align-items: center;  

    img{
      width: 100%;
    }
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 1rem;
  @media screen and (max-width: 640px) {
    margin: 8px 0px;
  }
`

const Info = styled.div`
  margin-left: 1rem;
  //.max-width: 20vw;
  width: clamp(50%, 50%, 20vw);
  h3{
    font-size: 1rem;
  }
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    justify-content: center;
  }
`

export default Recipe