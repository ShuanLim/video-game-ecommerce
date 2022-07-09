// import React from 'react'
// import { Header, } from 'semantic-ui-react'

// const HeaderExamplePage = () => (

//   <div>
//     <Header as='h1'><img  src="pixel-heart.jpg" alt="Logo"></img>Super Awesome Video Game E-Commerce Store </Header>
//     <Header as='h2'>Get your game on</Header>
    


import React from 'react'
import { Item } from 'semantic-ui-react'


const ItemExampleItems = () => (
  <Item.Group>

    <Item>
      {/* <Item.Image class="ui image"  src='rocket2.png' alt='logo'/> */}
      <div></div>
      <Item.Content>
        <h1>
        <Item.Header  as='a'>Super Awesome Video Game E-Commerce Store</Item.Header></h1>
        <h2><Item.Meta>The Best Games The Best Prices The Best Customers</Item.Meta></h2> 
        <p></p>
        <Item.Description>
        <img src='banner.png' alt='Banner'/>
        </Item.Description>
        <h2><Item.Extra>Newest Deals</Item.Extra></h2> 
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ItemExampleItems