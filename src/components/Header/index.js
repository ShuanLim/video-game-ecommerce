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
      <Item.Image class="ui tiny image"  src='rocket-.png' alt='Heart logo'/>
      <div></div>
      <Item.Content>
        <h1>
        <Item.Header  as='a'>Super Awesome Video Game E-Commerce Store</Item.Header></h1>
        <Item.Meta>The Best Games The Best Prices The Best Customers</Item.Meta>
        <p></p>
        <Item.Description>
        <img src='banner.png' alt='Banner'/>
        </Item.Description>
        <Item.Extra>Get Your Game On</Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ItemExampleItems