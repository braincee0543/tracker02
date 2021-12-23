import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
     
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? '#FC5130' :'#7AE582'}
            text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
           
        </header>  
    )
}

Header.defaultProps =  {  
 title: 'Task Tracker'
} 
//const headerStyle = {
  //  color: 'orangered',
   // backgroundColor:'navajowhite',
//}

export default Header
