import React from 'react';
import { Container } from '../Container';
import { Input } from '../formControls/Input';
import { Textarea } from '../formControls/Textarea';
import Select from '../formControls/Select';

export default function Contact() {
  return (
    <div className='md:pt-32 pb-24 pt-14 overflow-hidden'>
      <Container>
        {/* <div className=' flex flex-col relative justify-center md:flex-row md:items-center lg:gap-12 md:gap-6'> */}
        <div>
          <h4 className=' text-[2.375rem] relative text-primary pb-10 max-w-[440px] '>
            Let’s know how we can help your team
          </h4>
          <div className='grid gap-6 '>
            <div className='grid md:grid-cols-2 gap-y-6 lg:gap-x-40 gap-x-20'>
              <Input
                {...{
                  name: 'company_name',
                  label: 'Enter Company  name',
                  placeholder: 'First name',
                  type: 'text',
                }}
              />
              <Input
                {...{
                  name: 'email',
                  label: 'Enter your Email Address',
                  placeholder: 'Other names',
                  type: 'email',
                }}
              />

              <Select
                id='interest'
                name='interest'
                placeholder='Select Option'
                className='!py-3 !border-solid !mt-0 pl-[0.35rem] h-[50px]'
                options={[
                  {
                    label: 'Interest one',
                    value: 1,
                  },
                  {
                    label: 'Interest two',
                    value: 2,
                  },
                ]}
                optionPlaceHolder='Select Category'
                onChange={(value) => {
                  console.log(value);
                }}
                label='What are you interested in'
              />
              <Input
                {...{
                  name: 'budget',
                  label: 'What is your Budget range',
                  placeholder: 'Phone Number',
                  type: 'number',
                }}
              />
            </div>
            <Textarea
              name='message'
              classes='h-32'
              label='Additional message'
            />
            <button
              className=' px-10 py-3 rounded text-white bg-[#4388C8] w-max'
              type='submit'>
              Send
            </button>
          </div>
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
}

