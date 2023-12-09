import React from 'react'
import {FormMessageContainer} from "./styles";

const FormCustomMessage = ({message, messageType}) => {


  return (
      <div>
          <FormMessageContainer>
            <span>{message} {messageType?.length > 0  ? messageType === 'error' ? '😥' : '🙂' : '' }</span>
          </FormMessageContainer>
      </div>
  )
}

export { FormCustomMessage };
