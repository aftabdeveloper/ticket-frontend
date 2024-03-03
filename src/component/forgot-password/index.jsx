import {
    Form,
    Input,
    Button
} from "antd"
import { Link } from "react-router-dom";

const onFinish = (values) => {
    console.log(values);
  };

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
const ForgotPassword = ()=>{
    return (
        <>
            <div className="grid md:grid-cols-2">
                <div>
                    <img src="./images/register.jpg" width="100%"/>
                </div>
                <div className="p-8">
                    <div>
                        <h1 className="text-2xl font-semibold">Forgot Password !</h1>
                        <p className="text-gray-600">Authentication required for raising</p>
                                            
                        <Form
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            layout="vertical"
                        >

                            <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your email!',
                                },
                            ]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            >
                            <Button 
                                type="primary" 
                                htmlType="submit"
                                className="bg-indigo-600"
                                >
                                    Forgot
                            </Button>
                            </Form.Item>
                        </Form>
                        <div>
                        <Link to="/login" className="text-indigo-600 font-semibold">Login</Link>  
                        </div>
                        <div className="flex gap-1">
                            <p>Don't have an account ?</p>
                            <Link to="/register" className="text-indigo-600 font-semibold">Register</Link>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default ForgotPassword