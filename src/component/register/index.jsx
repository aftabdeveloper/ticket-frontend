import {
    Form,
    Input,
    Button
} from "antd"
import { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from 'react-otp-input';


const Register = ()=>{
    const[send,setSend] = useState(false)
    const [otp, setOtp] = useState('');
    
    const onRegister = (values) => {
        console.log(values);
        setSend(true)
      };

      const onVerify = ()=>{
        console.log(otp)
      }

    const Signup = ()=>{
        return (
            <>
                <div>
                            <h1 className="text-2xl font-semibold">Register !</h1>
                            <p className="text-gray-600">Authentication required for raising</p>
                                                
                            <Form
                                onFinish={onRegister}
                                autoComplete="off"
                                layout="vertical"
                            >
                                <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your username!',
                                    },
                                ]}
                                >
                                <Input />
                                </Form.Item>

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
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your password!',
                                    },
                                ]}
                                >
                                <Input.Password />
                                </Form.Item>
                                <Form.Item
                                label="Mobile"
                                name="mobile"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your mobile no!',
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
                                        Register
                                </Button>
                                </Form.Item>
                            </Form>
                            <div className="flex gap-1">
                                <p>All ready have an account ?</p>
                                <Link to="/login" className="text-indigo-600 font-semibold">Login</Link>
                            </div>
                            
                        </div>
            </>
        )
    }

    const Otp = ()=>{
        return (
        <>
        <div>
            <h1 className="text-2xl">Verification required</h1>
            <p>Enter otp send on your Mobile</p>

        </div>
        <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props} />}
        containerStyle={
            {
            marginTop:"24px"
            }
        }
        inputStyle={
            {
            border: "2px solid black",
            width: "40px",
            height: "40px",
            marginRight: "8px"
            }
        }
        />
        <Button
            className="bg-violet-600 text-white mt-[16px] rounded-md"
            size="large"
            onClick={onVerify}
        >
            Verify
        </Button>
        </>
        )
    }

    return (
        <>
            <div className="grid md:grid-cols-2">
                <img src="./images/register.jpg" width="100%"/>
                <div className="p-8">
                    {
                        send ? <Otp /> : <Signup />
                    }
                </div>
            </div>
        </>
    )
}

export default Register