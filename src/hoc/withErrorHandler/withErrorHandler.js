import React , {Component} from 'react'

const withErrorHandler = (WrappedComponent,axios) =>{

    return class extends Component{
        state = {
            error : null
        }

        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req =>{
                this.setState({error:null})
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use( res => res, error =>{
                this.setState({error:error})
            });
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        render (){
            return(
                <div>
                    {this.state.error ?alert(this.state.error): null}
                    <WrappedComponent  {...this.props}/>
                    </div>
            )
        }

    }
}

export default withErrorHandler