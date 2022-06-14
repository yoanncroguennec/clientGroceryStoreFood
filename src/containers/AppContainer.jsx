import { connect } from 'react-redux'
import App  from '../App'
import { addtoCart, updateCart, saveCart } from '../client/utils/redux/Actions'

// "connect()" : Relie un composant React au store Redux, en donnant à la fois accès au state et de dispatcher des actions envoyées au(x) reducer(s)
const AppContainer = connect(
    // "mapStateToProps()" : Accéder au state de l'application
    function mapStateToProps(state) { 
        return { items: state.items }
    },

    // "mapDispatchToProps()" : Dispatche des actions par le store vers le(s) reducer(s)
    function mapDispatchToProps(dispatch) { 
        return {
        //    onAddToCart: (item, quantity) => dispatch(addtoCart(item, quantity)),
        //    onUpdateToCart: (item, quantity) => dispatch(updateCart(item, quantity)),
           saveLocalStorage: items =>  dispatch(saveCart(items))        //    onLocalStorageCart: item => dispatch(saveCart(item)),
        }
    }
)(App)

export default AppContainer