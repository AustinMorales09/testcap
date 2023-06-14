import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const FoodDrink = () => {
  return (
    <div>
 
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1WYufN9i8s_BXbUWbHmWEUCr8SXwDR8Pn"
          alt="First slide"
        />
        <Carousel.Caption>
        <a href="https://www.artworkscincinnati.org/mural/brewing-heritage-grain-to-glass/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i class="bi bi-info-lg"></i></Button></a>{' '}        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1xKFwJq62x9WxBCLJGxa9YS-m1XrH7kMK"
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href="https://madtree.com/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1q10B0izFkMEpPMbXYr2DHWMkcmCPi9p0"
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="https://www.bobevans.com/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1JFELH4zzkaoqjRDOrhIIa2tkfsJ8sl-4"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <a href="https://www.findlaymarket.org/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
   
   <div className="container-fluid bg-info">
    <div className="row">
      <div className="col-12 text-center">
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        <h4>Browse Attractions:</h4> 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="https://madtree.com/" target="_blank">MadTree</Dropdown.Item>
        <Dropdown.Item href="https://www.bobevans.com/" target="_blank">Bob Evans</Dropdown.Item>
        <Dropdown.Item href="https://www.findlaymarket.org/" target="_blank">Findlay Market</Dropdown.Item>
        <Dropdown.Item href="https://braxtonbrewing.com/" target="_blank">Braxton Brewing Company</Dropdown.Item>
        <Dropdown.Item href="https://brewingheritagetrail.org/" target="_blank">Brewing Heritage Trail</Dropdown.Item>
        <Dropdown.Item href="https://junglejims.com/" target="_blank">Jungle Jim's</Dropdown.Item>
        <Dropdown.Item href="https://www.eatdrinknada.com/" target="_blank">Nada</Dropdown.Item>
        <Dropdown.Item href="https://www.sottocincinnati.com/" target="_blank">Sotto</Dropdown.Item>
        <Dropdown.Item href="https://www.eaglerestaurant.com/" target="_blank">The Eagle</Dropdown.Item>
        <Dropdown.Item href="https://authenticwaffle.com/" target="_blank">Taste of Belgium</Dropdown.Item>
        <Dropdown.Item href="https://taftsbeer.com/" target="_blank">Taft's Ale House</Dropdown.Item>
        <Dropdown.Item href="https://www.meltingpot.com/cincinnati-oh/" target="_blank">The Melting Pot</Dropdown.Item>
        <Dropdown.Item href="https://www.bloomsandberries.com/" target="_blank">Blooms & Berries Farm Market</Dropdown.Item>
        <Dropdown.Item href="https://www.sleepybeecafe.com/" target="_blank">Sleepy Bee Cafe</Dropdown.Item>
        <Dropdown.Item href="https://www.visitcincy.com/" target="_blank">More options at Visit Cincy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>   
    </div>
    </div>
   </div>

  {/* Footer*/}
  

</div>
  )
}

export default FoodDrink