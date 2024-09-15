import React from 'react'
import OauthSuccessRedirect from '../../components/auth/OauthSuccessRedirect';

type Props = {}

const OauthSuccessRedirectPage = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-[1440px] h-[1024px]">
        <OauthSuccessRedirect />
    </div>
  )
}

export default OauthSuccessRedirectPage