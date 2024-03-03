import { Button, Card } from 'antd';
import { CheckCircleOutlined } from "@ant-design/icons"
const Home = ()=>{
    const pricing = [
        {
          plan: 'starter',
          amount: 500,
          period: 'monthly',
          interval: 1,
          benefits: [
            'Access to basic features',
            'Email support',
            'Limited storage space',
          ],
        },
        {
          plan: 'standard',
          amount: 800,
          period: 'monthly',
          interval: 1,
          benefits: [
            'Access to all basic features',
            'Priority email support',
            'Increased storage space',
          ],
        },
        {
          plan: 'premium',
          amount: 1200,
          period: 'monthly',
          interval: 1,
          benefits: [
            'Access to all basic and premium features',
            '24/7 priority email and phone support',
            'Unlimited storage space',
            'Exclusive access to new features',
          ],
        },
      ];
      
    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className='bg-indigo-600 h-[50px] font-bold text-white flex justify-center items-center'>Tket</div>
            <div className='grid md:grid-cols-3 p-16 gap-6'>
                {
                    pricing.map((item,index)=>(
                        <Card 
                            key={index}
                            className='p-6'
                            >
                                <p className='text-center text-xl uppercase font-semibold mb-5'>{item.plan}</p>
                                <ul className='space-y-6'>
                                    {
                                        item.benefits.map((benefit,benefitIndex)=>(
                                            <div className='flex gap-2' key={benefitIndex}>
                                                <CheckCircleOutlined />
                                                <li>{benefit}</li>
                                            </div>
                                        ))
                                    }
                                </ul>
                            <Button
                                type='primary'
                                className='bg-indigo-600 mt-6'
                            >Choose plan</Button>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Home