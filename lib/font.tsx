import React from 'react'
import { Global } from "@emotion/react"

const Fonts: React.FC = () => (
  <Global styles={`
    /*
      copied: https://fonts.googleapis.com/css2?family=Roboto&family=Dancing+Script:wght@400;700&family=Kosugi+Maru&display=swap
    */

    /* vietnamese */
    @font-face {
      font-family: 'Dancing Script';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dancingscript/v19/If2RXTr6YS-zF4S-kcSWSVi_szLviuEHiC4Wl-8.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Dancing Script';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dancingscript/v19/If2RXTr6YS-zF4S-kcSWSVi_szLuiuEHiC4Wl-8.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Dancing Script';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dancingscript/v19/If2RXTr6YS-zF4S-kcSWSVi_szLgiuEHiC4W.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Dancing Script';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dancingscript/v19/If2RXTr6YS-zF4S-kcSWSVi_szLviuEHiC4Wl-8.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Dancing Script';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dancingscript/v19/If2RXTr6YS-zF4S-kcSWSVi_szLuiuEHiC4Wl-8.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Dancing Script';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/dancingscript/v19/If2RXTr6YS-zF4S-kcSWSVi_szLgiuEHiC4W.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* [2] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.2.woff2) format('woff2');
      unicode-range: U+ffd7, U+ffda-ffdc, U+ffe0-ffe2, U+ffe4, U+ffe6, U+ffe8-ffee, U+1f100-1f10c, U+1f110-1f16c, U+1f170-1f1ac, U+1f200-1f202, U+1f210-1f234;
    }
    /* [3] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.3.woff2) format('woff2');
      unicode-range: U+fa10, U+fa12-fa6d, U+fb00-fb04, U+fe10-fe19, U+fe30-fe42, U+fe44-fe52, U+fe54-fe66, U+fe68-fe6b, U+ff02, U+ff04, U+ff07, U+ff51, U+ff5b, U+ff5d, U+ff5f-ff60, U+ff66, U+ff69, U+ff87, U+ffa1-ffbe, U+ffc2-ffc7, U+ffca-ffcf, U+ffd2-ffd6;
    }
    /* [4] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.4.woff2) format('woff2');
      unicode-range: U+f92d-f959, U+f95b-f9f2, U+f9f4-fa0b, U+fa0e-fa0f;
    }
    /* [5] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.5.woff2) format('woff2');
      unicode-range: U+9e8b-9e8c, U+9e8e-9e8f, U+9e91-9e92, U+9e95-9e96, U+9e98, U+9e9b, U+9e9d-9e9e, U+9ea4-9ea5, U+9ea8-9eaa, U+9eac-9eb0, U+9eb3-9eb5, U+9eb8, U+9ebc-9ebf, U+9ec3, U+9ec6, U+9ec8, U+9ecb-9ecd, U+9ecf-9ed1, U+9ed4-9ed5, U+9ed8, U+9edb-9ee0, U+9ee4-9ee5, U+9ee7-9ee8, U+9eec-9ef2, U+9ef4-9ef9, U+9efb-9eff, U+9f02-9f03, U+9f07-9f09, U+9f0e-9f12, U+9f14-9f17, U+9f19-9f1b, U+9f1f-9f22, U+9f26, U+9f2a-9f2c, U+9f2f, U+9f31-9f32, U+9f34, U+9f37, U+9f39-9f3a, U+9f3c-9f3f, U+9f41, U+9f43-9f47, U+9f4a, U+9f4e-9f50, U+9f52-9f58, U+9f5a, U+9f5d-9f61, U+9f63, U+9f66-9f6a, U+9f6c-9f73, U+9f75-9f77, U+9f7a, U+9f7d, U+9f7f, U+9f8f-9f92, U+9f94-9f97, U+9f99, U+9f9c-9fa3, U+9fa5, U+9fb4, U+9fbc-9fc2, U+9fc4, U+9fc6, U+9fcc, U+f900-f92c;
    }
    /* [6] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.6.woff2) format('woff2');
      unicode-range: U+9c3e, U+9c41, U+9c43-9c4a, U+9c4e-9c50, U+9c52-9c54, U+9c56, U+9c58, U+9c5a-9c61, U+9c63, U+9c65, U+9c67-9c6b, U+9c6d-9c6e, U+9c70, U+9c72, U+9c75-9c78, U+9c7a-9c7c, U+9ce6-9ce7, U+9ceb-9cec, U+9cf0, U+9cf2, U+9cf6-9cf7, U+9cf9, U+9d02-9d03, U+9d06-9d09, U+9d0b, U+9d0e, U+9d11-9d12, U+9d15, U+9d17-9d18, U+9d1b-9d1f, U+9d23, U+9d26, U+9d2a-9d2c, U+9d2f-9d30, U+9d32-9d34, U+9d3a, U+9d3c-9d3f, U+9d41-9d48, U+9d4a, U+9d50-9d54, U+9d59, U+9d5d-9d65, U+9d69-9d6c, U+9d6f-9d70, U+9d72-9d73, U+9d76-9d77, U+9d7a-9d7c, U+9d7e, U+9d83-9d84, U+9d86-9d87, U+9d89-9d8a, U+9d8d-9d8e, U+9d92-9d93, U+9d95-9d9a, U+9da1, U+9da4, U+9da9-9dac, U+9dae, U+9db1-9db2, U+9db5, U+9db8-9dbd, U+9dbf-9dc4, U+9dc6-9dc7, U+9dc9-9dca, U+9dcf, U+9dd3-9dd7, U+9dd9-9dda, U+9dde-9de0, U+9de3, U+9de5-9de7, U+9de9, U+9deb, U+9ded-9df0, U+9df3-9df4, U+9df8, U+9dfd-9dfe, U+9e02, U+9e07, U+9e0a, U+9e0d-9e0e, U+9e10-9e12, U+9e15-9e16, U+9e19-9e1f, U+9e75, U+9e79-9e7d, U+9e80-9e85, U+9e87-9e88;
    }
    /* [7] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.7.woff2) format('woff2');
      unicode-range: U+9ae5-9ae7, U+9ae9, U+9aeb-9aec, U+9aee-9aef, U+9af1-9af5, U+9af7, U+9af9-9afb, U+9afd, U+9aff-9b06, U+9b08-9b09, U+9b0b-9b0e, U+9b10, U+9b12, U+9b16, U+9b18-9b1d, U+9b1f-9b20, U+9b22-9b23, U+9b25-9b2f, U+9b32-9b35, U+9b37, U+9b39-9b3b, U+9b3d, U+9b43-9b44, U+9b48, U+9b4b-9b4f, U+9b51, U+9b55-9b58, U+9b5b, U+9b5e, U+9b61, U+9b63, U+9b65-9b66, U+9b68, U+9b6a-9b6f, U+9b72-9b79, U+9b7f-9b80, U+9b83-9b87, U+9b89-9b8b, U+9b8d, U+9b8f-9b94, U+9b96-9b97, U+9b9a, U+9b9d-9ba0, U+9ba6-9ba7, U+9ba9-9baa, U+9bac, U+9bb0-9bb2, U+9bb4, U+9bb7-9bb9, U+9bbb-9bbc, U+9bbe-9bc1, U+9bc6-9bc8, U+9bca, U+9bce-9bd2, U+9bd4, U+9bd7-9bd8, U+9bdd, U+9bdf, U+9be1-9be5, U+9be7, U+9bea-9beb, U+9bee-9bf3, U+9bf5, U+9bf7-9bfa, U+9bfd, U+9bff-9c00, U+9c02, U+9c04, U+9c06, U+9c08-9c0d, U+9c0f-9c16, U+9c18-9c1e, U+9c21-9c2a, U+9c2d-9c32, U+9c35-9c37, U+9c39-9c3a, U+9c3d;
    }
    /* [8] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.8.woff2) format('woff2');
      unicode-range: U+98eb, U+98ed-98ee, U+98f0-98f1, U+98f3, U+98f6, U+9902, U+9907-9909, U+9911-9912, U+9914-9918, U+991a-9922, U+9924, U+9926-9927, U+992b-992c, U+992e, U+9931-9935, U+9939-993e, U+9940-9942, U+9945-9949, U+994b-994e, U+9950-9952, U+9954-9955, U+9958-9959, U+995b-995c, U+995e-9960, U+9963, U+9997-9998, U+999b, U+999d-999f, U+99a3, U+99a5-99a6, U+99a8, U+99ad-99ae, U+99b0-99b2, U+99b5, U+99b9-99ba, U+99bc-99bd, U+99bf, U+99c1, U+99c3, U+99c8-99c9, U+99d1, U+99d3-99d5, U+99d8-99df, U+99e1-99e2, U+99e7, U+99ea-99ee, U+99f0-99f2, U+99f4-99f5, U+99f8-99f9, U+99fb-99fe, U+9a01-9a05, U+9a08, U+9a0a-9a0c, U+9a0f-9a11, U+9a16, U+9a1a, U+9a1e, U+9a20, U+9a22-9a24, U+9a27, U+9a2b, U+9a2d-9a2e, U+9a31, U+9a33, U+9a35-9a38, U+9a3e, U+9a40-9a45, U+9a47, U+9a4a-9a4e, U+9a51-9a52, U+9a54-9a58, U+9a5b, U+9a5d, U+9a5f, U+9a62, U+9a64-9a65, U+9a69-9a6c, U+9aaa, U+9aac-9ab0, U+9ab2, U+9ab4-9ab7, U+9ab9, U+9abb-9ac1, U+9ac3, U+9ac6, U+9ac8, U+9ace-9ad3, U+9ad5-9ad7, U+9adb-9adc, U+9ade-9ae0, U+9ae2-9ae4;
    }
    /* [9] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.9.woff2) format('woff2');
      unicode-range: U+971d, U+9721-9724, U+9728, U+972a, U+9730-9731, U+9733, U+9736, U+9738-9739, U+973b, U+973d-973e, U+9741-9744, U+9746-974a, U+974d-974f, U+9751, U+9755, U+9757-9758, U+975a-975c, U+9760-9761, U+9763-9764, U+9766-9768, U+976a-976b, U+976e, U+9771, U+9773, U+9776-977d, U+977f-9781, U+9785-9786, U+9789, U+978b, U+978f-9790, U+9795-9797, U+9799-979a, U+979c, U+979e-97a0, U+97a2-97a3, U+97a6, U+97a8, U+97ab-97ac, U+97ae, U+97b1-97b6, U+97b8-97ba, U+97bc, U+97be-97bf, U+97c1, U+97c3-97ce, U+97d0-97d1, U+97d4, U+97d7-97d9, U+97db-97de, U+97e0-97e1, U+97e4, U+97e6, U+97ed-97ef, U+97f1-97f2, U+97f4-97f8, U+97fa, U+9804, U+9807, U+980a, U+980c-980f, U+9814, U+9816-9817, U+9819-981a, U+981c, U+981e, U+9820-9821, U+9823-9826, U+982b, U+982e-9830, U+9832-9835, U+9837, U+9839, U+983d-983e, U+9844, U+9846-9847, U+984a-984b, U+984f, U+9851-9853, U+9856-9857, U+9859-985b, U+9862-9863, U+9865-9866, U+986a-986c, U+986f-9871, U+9873-9875, U+98aa-98ab, U+98ad-98ae, U+98b0-98b1, U+98b4, U+98b6-98b8, U+98ba-98bc, U+98bf, U+98c2-98c8, U+98cb-98cc, U+98ce, U+98dc, U+98de, U+98e0-98e1, U+98e3, U+98e5-98e7, U+98e9-98ea;
    }
    /* [10] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.10.woff2) format('woff2');
      unicode-range: U+944a, U+944c, U+9452-9453, U+9455, U+9459-945c, U+945e-9463, U+9468, U+946a-946b, U+946d-9472, U+9475, U+9477, U+947c-947f, U+9481, U+9483-9485, U+9578-9579, U+957e-957f, U+9582, U+9584, U+9586-9588, U+958a, U+958c-958f, U+9592, U+9594, U+9596, U+9598-9599, U+959d-95a1, U+95a4, U+95a6-95a9, U+95ab-95ad, U+95b1, U+95b4, U+95b6, U+95b9-95bf, U+95c3, U+95c6, U+95c8-95cd, U+95d0-95d6, U+95d9-95da, U+95dc-95e2, U+95e4-95e6, U+95e8, U+961d-961e, U+9621-9622, U+9624-9626, U+9628, U+962c, U+962e-962f, U+9631, U+9633-9634, U+9637-963a, U+963c-963d, U+9641-9642, U+964b-964c, U+964f, U+9652, U+9654, U+9656-9658, U+965c-965f, U+9661, U+9666, U+966a, U+966c, U+966e, U+9672, U+9674, U+9677, U+967b-967c, U+967e-967f, U+9681-9684, U+9689, U+968b, U+968d, U+9691, U+9695-9698, U+969a, U+969d, U+969f, U+96a4-96aa, U+96ae-96b4, U+96b6, U+96b8-96bb, U+96bd, U+96c1, U+96c9-96cb, U+96cd-96ce, U+96d2, U+96d5-96d6, U+96d8-96da, U+96dc-96df, U+96e9, U+96ef, U+96f1, U+96f9-96fa, U+9702-9706, U+9708-9709, U+970d-970f, U+9711, U+9713-9714, U+9716, U+9719-971b;
    }
    /* [11] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.11.woff2) format('woff2');
      unicode-range: U+92bc-92bd, U+92bf-92c3, U+92c5-92c8, U+92cb-92d0, U+92d2-92d3, U+92d5, U+92d7-92d9, U+92dc-92dd, U+92df-92e1, U+92e3-92e5, U+92e7-92ea, U+92ec, U+92ee, U+92f0, U+92f2, U+92f7-92fb, U+92ff-9300, U+9302, U+9304, U+9308, U+930d, U+930f-9311, U+9314-9315, U+9318-931a, U+931c-931f, U+9321-9325, U+9327-932b, U+932e, U+9333-9337, U+933a-933b, U+9344, U+9347-934a, U+934d, U+9350-9352, U+9354-9358, U+935a, U+935c, U+935e, U+9360, U+9364-9365, U+9367, U+9369-936d, U+936f-9371, U+9373-9374, U+9376, U+937a, U+937d-9382, U+9388, U+938a-938b, U+938d, U+938f, U+9392, U+9394-9395, U+9397-9398, U+939a-939b, U+939e, U+93a1, U+93a3-93a4, U+93a6, U+93a8-93a9, U+93ab-93ad, U+93b0, U+93b4-93b6, U+93b9-93bb, U+93c1, U+93c3-93cd, U+93d0-93d1, U+93d3, U+93d6-93d9, U+93dc-93df, U+93e2, U+93e4-93e8, U+93f1, U+93f5, U+93f7-93fb, U+93fd, U+9401-9404, U+9407-9409, U+940d-9410, U+9413-9417, U+9419-941a, U+941f, U+9421, U+942b, U+942e-942f, U+9431-9434, U+9436, U+9438, U+943a-943b, U+943d, U+943f, U+9441, U+9443-9445, U+9448;
    }
    /* [12] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.12.woff2) format('woff2');
      unicode-range: U+9143, U+9146-914c, U+914f, U+9153, U+9156-915b, U+9161, U+9163-9165, U+9167, U+9169, U+916d, U+9172-9174, U+9179-917b, U+9181-9183, U+9185-9187, U+9189-918b, U+918e, U+9191, U+9193-9195, U+9197-9198, U+919e, U+91a1-91a2, U+91a6, U+91a8, U+91aa-91b6, U+91ba-91bd, U+91bf-91c6, U+91c9, U+91cb, U+91d0, U+91d3-91d4, U+91d6-91d7, U+91d9-91db, U+91de-91df, U+91e1, U+91e4-91e6, U+91e9-91ea, U+91ec-91f1, U+91f5-91f7, U+91f9, U+91fb-91fd, U+91ff-9201, U+9204-9207, U+9209-920a, U+920c, U+920e, U+9210-9218, U+921c-921e, U+9223-9226, U+9228-9229, U+922c, U+922e-9230, U+9233, U+9235-923a, U+923c, U+923e-9240, U+9242-9243, U+9245-924b, U+924d-9251, U+9256-925a, U+925c-925e, U+9260-9261, U+9264-9269, U+926e-9270, U+9275-9279, U+927b-927f, U+9288-928a, U+928d-928e, U+9291-9293, U+9295-9297, U+9299, U+929b-929c, U+929f-92a0, U+92a4-92a5, U+92a7-92a8, U+92ab, U+92af, U+92b2-92b3, U+92b6-92bb;
    }
    /* [13] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.13.woff2) format('woff2');
      unicode-range: U+8f52-8f55, U+8f57-8f58, U+8f5c-8f5e, U+8f61-8f66, U+8f9c-8f9d, U+8f9f-8fa2, U+8fa4-8fa8, U+8fad-8faf, U+8fb4-8fb8, U+8fbe, U+8fc0-8fc2, U+8fc6, U+8fc8, U+8fca-8fcb, U+8fcd, U+8fd0, U+8fd2-8fd3, U+8fd5, U+8fda, U+8fe0, U+8fe2-8fe5, U+8fe8-8fea, U+8fed-8fef, U+8ff1, U+8ff4-8ff6, U+8ff8-8ffb, U+8ffe, U+9002, U+9004-9005, U+9008, U+900b-900e, U+9011, U+9013, U+9015-9016, U+9018, U+901b, U+901e, U+9021, U+9027-902a, U+902c-902d, U+902f, U+9033-9037, U+9039, U+903c, U+903e-903f, U+9041, U+9043-9044, U+9049, U+904c, U+904f-9052, U+9056, U+9058, U+905b-905e, U+9062, U+9066-9068, U+906c, U+906f-9070, U+9072, U+9074, U+9076, U+9079, U+9080-9083, U+9085, U+9087-9088, U+908b-908c, U+908e-9090, U+9095, U+9097-9099, U+909b, U+90a0-90a2, U+90a5, U+90a8, U+90af-90b6, U+90bd-90be, U+90c3-90c5, U+90c7-90c9, U+90cc, U+90d2, U+90d5, U+90d7-90d9, U+90db-90df, U+90e2, U+90e4-90e5, U+90eb, U+90ef-90f0, U+90f2, U+90f4, U+90f6, U+90fe-9100, U+9102, U+9104-9106, U+9108, U+910d, U+9110, U+9112, U+9114-911a, U+911c, U+911e, U+9120, U+9122-9123, U+9125, U+9127, U+9129, U+912d-9132, U+9134, U+9136-9137, U+9139-913a, U+913c-913d;
    }
    /* [14] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.14.woff2) format('woff2');
      unicode-range: U+8dc0, U+8dc2, U+8dc5-8dc8, U+8dca-8dcc, U+8dce-8dcf, U+8dd1, U+8dd4-8dd7, U+8dd9-8ddb, U+8ddf, U+8de3-8de5, U+8de7, U+8dea-8dec, U+8df0-8df2, U+8df4, U+8dfc-8dfd, U+8dff, U+8e01, U+8e04-8e06, U+8e08-8e09, U+8e0b-8e0c, U+8e10-8e11, U+8e14, U+8e16, U+8e1d-8e23, U+8e26-8e27, U+8e30-8e31, U+8e33-8e39, U+8e3d, U+8e40-8e42, U+8e44, U+8e47-8e50, U+8e54-8e55, U+8e59, U+8e5b-8e64, U+8e69, U+8e6c-8e6d, U+8e6f-8e72, U+8e75-8e77, U+8e79-8e7c, U+8e81-8e85, U+8e89, U+8e8b, U+8e90-8e95, U+8e98-8e9b, U+8e9d-8e9e, U+8ea1-8ea2, U+8ea7, U+8ea9-8eaa, U+8eac-8eb1, U+8eb3, U+8eb5-8eb6, U+8eba-8ebb, U+8ebe, U+8ec0-8ec1, U+8ec3-8ec8, U+8ecb, U+8ecf, U+8ed1, U+8ed4, U+8edb-8edc, U+8ee3, U+8ee8, U+8eeb, U+8eed-8eee, U+8ef0-8ef1, U+8ef7, U+8ef9-8efc, U+8efe, U+8f00, U+8f02, U+8f05, U+8f07-8f08, U+8f0a, U+8f0f-8f10, U+8f12-8f13, U+8f15-8f19, U+8f1b-8f1c, U+8f1e-8f21, U+8f23, U+8f25-8f28, U+8f2b-8f2f, U+8f33-8f37, U+8f39-8f3b, U+8f3e, U+8f40-8f43, U+8f45-8f47, U+8f49-8f4a, U+8f4c-8f4f, U+8f51;
    }
    /* [15] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.15.woff2) format('woff2');
      unicode-range: U+8b2d, U+8b30, U+8b37, U+8b3c, U+8b3e, U+8b41-8b46, U+8b48-8b49, U+8b4c-8b4f, U+8b51-8b54, U+8b56, U+8b59, U+8b5b, U+8b5e-8b5f, U+8b63, U+8b69, U+8b6b-8b6d, U+8b6f, U+8b71, U+8b74, U+8b76, U+8b78-8b79, U+8b7c-8b81, U+8b84-8b85, U+8b8a-8b8f, U+8b92-8b96, U+8b99-8b9a, U+8b9c-8ba0, U+8c38-8c3a, U+8c3d-8c3f, U+8c41, U+8c45, U+8c47-8c49, U+8c4b-8c4c, U+8c4e-8c51, U+8c53-8c55, U+8c57-8c59, U+8c5b, U+8c5d, U+8c62-8c64, U+8c66, U+8c68-8c69, U+8c6b-8c6d, U+8c73, U+8c75-8c76, U+8c78, U+8c7a-8c7c, U+8c7e, U+8c82, U+8c85-8c87, U+8c89-8c8b, U+8c8d-8c8e, U+8c90, U+8c92-8c94, U+8c98-8c99, U+8c9b-8c9c, U+8c9f, U+8ca4, U+8cad-8cae, U+8cb2-8cb3, U+8cb6, U+8cb9-8cba, U+8cbd, U+8cc1-8cc2, U+8cc4-8cc6, U+8cc8-8cc9, U+8ccb, U+8ccd-8ccf, U+8cd2, U+8cd5-8cd6, U+8cd9-8cda, U+8cdd, U+8ce1, U+8ce3-8ce4, U+8ce6, U+8ce8, U+8cec, U+8cef-8cf2, U+8cf4-8cf5, U+8cf7-8cf8, U+8cfa-8cfb, U+8cfd-8cff, U+8d01, U+8d03-8d04, U+8d07, U+8d09-8d0b, U+8d0d-8d10, U+8d12-8d14, U+8d16-8d17, U+8d1b-8d1d, U+8d65, U+8d67, U+8d69, U+8d6b-8d6e, U+8d71, U+8d73, U+8d76, U+8d7f, U+8d81-8d82, U+8d84, U+8d88, U+8d8d, U+8d90-8d91, U+8d95, U+8d99, U+8d9e-8da0, U+8da6, U+8da8, U+8dab-8dac, U+8daf, U+8db2, U+8db5, U+8db7, U+8db9-8dbc, U+8dbe;
    }
    /* [16] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.16.woff2) format('woff2');
      unicode-range: U+8973-8975, U+8977, U+897a-897e, U+8980, U+8983, U+8988-898a, U+898d, U+8990, U+8993-8995, U+8998, U+899b-899c, U+899f-89a1, U+89a5-89a6, U+89a9, U+89ac, U+89af-89b0, U+89b2, U+89b4-89b7, U+89ba, U+89bc-89bd, U+89bf-89c1, U+89d4-89d8, U+89da, U+89dc-89dd, U+89e5, U+89e7, U+89e9, U+89eb, U+89ed, U+89f1, U+89f3-89f4, U+89f6, U+89f8-89f9, U+89fd, U+89ff, U+8a01, U+8a04-8a05, U+8a07, U+8a0c, U+8a0f-8a12, U+8a14-8a16, U+8a1b, U+8a1d-8a1e, U+8a20-8a22, U+8a24-8a26, U+8a2b-8a2c, U+8a2f, U+8a35-8a37, U+8a3b, U+8a3d-8a3e, U+8a40-8a41, U+8a43, U+8a45-8a49, U+8a4d-8a4e, U+8a51-8a54, U+8a56-8a58, U+8a5b-8a5d, U+8a61-8a62, U+8a65, U+8a67, U+8a6c-8a6d, U+8a75-8a77, U+8a79-8a7c, U+8a7e-8a80, U+8a82-8a86, U+8a8b, U+8a8f-8a92, U+8a96-8a97, U+8a99-8a9a, U+8a9f, U+8aa1, U+8aa3, U+8aa5-8aaa, U+8aae-8aaf, U+8ab3, U+8ab6-8ab7, U+8abb-8abc, U+8abe, U+8ac2-8ac4, U+8ac6, U+8ac8-8aca, U+8acc-8acd, U+8ad0-8ad1, U+8ad3-8ad5, U+8ad7, U+8ada-8ae2, U+8ae4, U+8ae7, U+8aeb-8aec, U+8aee, U+8af0-8af1, U+8af3-8af7, U+8afa, U+8afc, U+8aff, U+8b01-8b02, U+8b04-8b07, U+8b0a-8b0d, U+8b0f-8b11, U+8b14, U+8b16, U+8b1a, U+8b1c, U+8b1e-8b20, U+8b26, U+8b28, U+8b2b-8b2c;
    }
    /* [17] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.17.woff2) format('woff2');
      unicode-range: U+87e2-87e6, U+87ea-87ed, U+87ef, U+87f1, U+87f3, U+87f5-87f8, U+87fa-87fb, U+87fe-87ff, U+8801, U+8803, U+8805-8807, U+8809-880b, U+880d-8816, U+8818-881c, U+881e-881f, U+8821-8822, U+8827-8828, U+882d-882e, U+8830-8832, U+8835-8836, U+8839-883c, U+8841-8845, U+8848-884b, U+884d-884e, U+8851-8852, U+8855-8856, U+8858-885a, U+885c, U+885e-8860, U+8862, U+8864, U+8869, U+886b, U+886e-886f, U+8871-8872, U+8875, U+8877, U+8879, U+887b, U+887d-887e, U+8880-8882, U+8888, U+888d, U+8892, U+8897-889c, U+889e-88a0, U+88a2, U+88a4, U+88a8, U+88aa, U+88ae, U+88b0-88b1, U+88b5, U+88b7, U+88ba, U+88bc-88c0, U+88c3-88c4, U+88c6, U+88ca-88ce, U+88d1-88d4, U+88d8-88d9, U+88db, U+88dd-88e1, U+88e7-88e8, U+88ef-88f2, U+88f4-88f5, U+88f7, U+88f9, U+88fc, U+8901-8902, U+8904, U+8906, U+890a, U+890c-890f, U+8913, U+8915-8916, U+8918-891a, U+891c-891e, U+8920, U+8925-8928, U+892a-892b, U+8930-8932, U+8935-893b, U+893e, U+8940-8946, U+8949, U+894c-894d, U+894f, U+8952, U+8956-8957, U+895a-895c, U+895e, U+8960-8964, U+8966, U+896a-896b, U+896d-8970;
    }
    /* [18] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.18.woff2) format('woff2');
      unicode-range: U+8655-8659, U+865b, U+865d-8664, U+8667, U+8669, U+866c, U+866f, U+8671, U+8675-8677, U+867a-867b, U+867d, U+8687-8689, U+868b-868d, U+8691, U+8693, U+8695-8696, U+8698, U+869a, U+869c-869d, U+86a1, U+86a3-86a4, U+86a6-86ab, U+86ad, U+86af-86b1, U+86b3-86b9, U+86bf-86c1, U+86c3-86c6, U+86c9, U+86cb, U+86ce, U+86d1-86d2, U+86d4-86d5, U+86d7, U+86da, U+86dc, U+86de-86e0, U+86e3-86e7, U+86e9, U+86ec-86ed, U+86ef, U+86f8-86fe, U+8700, U+8703-870b, U+870d-8714, U+8719-871a, U+871e-871f, U+8721-8723, U+8725, U+8728-8729, U+872e-872f, U+8731-8732, U+8734, U+8737, U+8739-8740, U+8743, U+8745, U+8749, U+874b-874e, U+8751, U+8753, U+8755, U+8757-8759, U+875d, U+875f-8761, U+8763-8766, U+8768, U+876a, U+876e-876f, U+8771-8772, U+8774, U+8778, U+877b-877c, U+877f, U+8782-8789, U+878b-878c, U+878e, U+8790, U+8793, U+8795, U+8797-8799, U+879e-87a0, U+87a2-87a3, U+87a7, U+87ab-87af, U+87b1, U+87b3, U+87b5, U+87bb, U+87bd-87c1, U+87c4, U+87c6-87cb, U+87ce, U+87d0, U+87d2, U+87d5-87d6, U+87d9-87da, U+87dc, U+87df-87e0;
    }
    /* [19] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.19.woff2) format('woff2');
      unicode-range: U+84b4, U+84b9-84bb, U+84bd-84c2, U+84c6-84ca, U+84cc-84d1, U+84d3, U+84d6, U+84d9-84da, U+84dc, U+84e7, U+84ea, U+84ec, U+84ef-84f2, U+84f4, U+84f7, U+84fa-84fd, U+84ff-8500, U+8502-8503, U+8506-8507, U+850c, U+850e, U+8510, U+8514-8515, U+8517-8518, U+851a-851c, U+851e-851f, U+8521-8525, U+8527, U+852a-852c, U+852f, U+8532-8534, U+8536, U+853e-8541, U+8543, U+8546, U+8548, U+854a-854b, U+854f-8553, U+8555-855a, U+855c-8564, U+8569-856b, U+856d, U+856f, U+8577, U+8579-857b, U+857d-8581, U+8585-8586, U+8588-858c, U+858f-8591, U+8593, U+8597-8598, U+859b-859d, U+859f-85a0, U+85a2, U+85a4-85a5, U+85a7-85a8, U+85ad-85b0, U+85b4, U+85b6-85ba, U+85bc-85bf, U+85c1-85c2, U+85c7, U+85c9-85cb, U+85ce-85d0, U+85d5, U+85d8-85da, U+85dc, U+85df-85e1, U+85e5-85e6, U+85e8, U+85ed, U+85f3-85f4, U+85f6-85f7, U+85f9-85fa, U+85fc, U+85fe-8600, U+8602, U+8604-8606, U+860a-860b, U+860d-860e, U+8610-8613, U+8616-861b, U+861e, U+8621-8622, U+8624, U+8627, U+8629, U+862f-8630, U+8636, U+8638-863a, U+863c-863d, U+863f-8642, U+8646, U+864d, U+8652-8654;
    }
    /* [20] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.20.woff2) format('woff2');
      unicode-range: U+82e8, U+82ea, U+82ed, U+82ef, U+82f3-82f4, U+82f6-82f7, U+82f9, U+82fb, U+82fd-82fe, U+8300-8301, U+8303, U+8306-8308, U+830a-830c, U+8316-8318, U+831b, U+831d-831f, U+8321-8323, U+832b-8335, U+8337, U+833a, U+833c-833d, U+8340, U+8342-8347, U+834a, U+834d-8351, U+8353-8357, U+835a, U+8362-8363, U+8370, U+8373, U+8375, U+8378, U+837c-837d, U+837f-8380, U+8382, U+8384-8387, U+838a, U+838d-838e, U+8392-8396, U+8398-83a0, U+83a2, U+83a6-83ad, U+83b1, U+83b5, U+83bd-83c1, U+83c7, U+83c9, U+83ce-83d1, U+83d4, U+83d6, U+83d8, U+83dd, U+83df-83e1, U+83e5, U+83e8, U+83ea-83eb, U+83f0, U+83f2, U+83f4, U+83f6-83f9, U+83fb-83fd, U+8401, U+8403-8404, U+8406-8407, U+840a-840b, U+840d, U+840f, U+8411, U+8413, U+8415, U+8417, U+8419, U+8420, U+8422, U+842a, U+842f, U+8431, U+8435, U+8438-8439, U+843c, U+8445-8448, U+844a, U+844d-844f, U+8451-8452, U+8456, U+8458-845a, U+845c, U+845f-8462, U+8464-8467, U+8469-846b, U+846d-8470, U+8473-8474, U+8476-847a, U+847c-847d, U+8481-8482, U+8484-8485, U+848b, U+8490, U+8492-8493, U+8495, U+8497, U+849c, U+849e-849f, U+84a1, U+84a6, U+84a8-84aa, U+84ad, U+84af, U+84b1;
    }
    /* [21] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.21.woff2) format('woff2');
      unicode-range: U+814a, U+814c, U+8151-8153, U+8157, U+815f-8161, U+8165-8169, U+816d-816f, U+8171, U+8173-8174, U+8177, U+8180-8186, U+8188, U+818a-818b, U+818e, U+8190, U+8193, U+8195-8196, U+8198, U+819b, U+819e, U+81a0, U+81a2, U+81a4, U+81a9, U+81ae, U+81b0, U+81b2, U+81b4-81b5, U+81b8, U+81ba-81bb, U+81bd-81be, U+81c0-81c3, U+81c5-81c6, U+81c8-81cb, U+81cd-81cf, U+81d1, U+81d5-81db, U+81dd-81e1, U+81e4-81e5, U+81e7, U+81eb-81ec, U+81ef-81f2, U+81f5-81f6, U+81f8-81fb, U+81fd-8205, U+8209-820b, U+820d, U+820f, U+8212-8214, U+8216, U+8219-821d, U+8221-8222, U+8228-8229, U+822b, U+822e, U+8232-8235, U+8237-8238, U+823a, U+823c, U+8240, U+8243-8246, U+8249, U+824b, U+824e-824f, U+8251, U+8256-825a, U+825c-825d, U+825f-8260, U+8262-8264, U+8267-8268, U+826a-826b, U+826d-826e, U+8271, U+8274, U+8277, U+8279, U+827b, U+827d-8281, U+8283-8284, U+8287, U+8289-828a, U+828d-828e, U+8291-8294, U+8296, U+8298-829b, U+829f-82a1, U+82a3-82a4, U+82a7-82ac, U+82ae, U+82b0, U+82b2, U+82b4, U+82b7, U+82ba-82bc, U+82be-82bf, U+82c5-82c6, U+82d0, U+82d2-82d3, U+82d5, U+82d9-82da, U+82dc, U+82de-82e4, U+82e7;
    }
    /* [22] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.22.woff2) format('woff2');
      unicode-range: U+7f77-7f79, U+7f7d-7f80, U+7f82-7f83, U+7f86-7f88, U+7f8b-7f8d, U+7f8f-7f91, U+7f94, U+7f96-7f97, U+7f9a, U+7f9c-7f9d, U+7fa1-7fa3, U+7fa6, U+7faa, U+7fad-7faf, U+7fb2, U+7fb4, U+7fb6, U+7fb8-7fb9, U+7fbc, U+7fbf-7fc0, U+7fc3, U+7fc5-7fc6, U+7fc8, U+7fca, U+7fce-7fcf, U+7fd5, U+7fdb, U+7fdf, U+7fe1, U+7fe3, U+7fe5-7fe6, U+7fe8-7fe9, U+7feb-7fec, U+7fee-7ff0, U+7ff2-7ff3, U+7ff9-7ffa, U+7ffd-7fff, U+8002, U+8004, U+8006-8008, U+800a-800f, U+8011-8014, U+8016, U+8018-8019, U+801c-8021, U+8024, U+8026, U+8028, U+802c, U+802e, U+8030, U+8034-8035, U+8037, U+8039-8040, U+8043-8044, U+8046, U+804a, U+8052, U+8058, U+805a, U+805f-8060, U+8062, U+8064, U+8066, U+8068, U+806d, U+806f-8073, U+8075-8076, U+8079, U+807b, U+807d-8081, U+8084-8088, U+808b, U+808e, U+8093, U+8099-809a, U+809c, U+809e, U+80a4, U+80a6-80a7, U+80ab-80ad, U+80b1, U+80b8-80b9, U+80c4-80c5, U+80c8, U+80ca, U+80cd, U+80cf, U+80d2, U+80d4-80db, U+80dd, U+80e0, U+80e4-80e6, U+80ed-80f3, U+80f5-80f7, U+80f9-80fc, U+80fe, U+8101, U+8103, U+8109, U+810b, U+810d, U+8116-8118, U+811b-811c, U+811e, U+8120, U+8123-8124, U+8127, U+8129, U+812b-812c, U+812f-8130, U+8135, U+8139-813a, U+813c-813e, U+8141, U+8145-8147;
    }
    /* [23] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.23.woff2) format('woff2');
      unicode-range: U+7d57, U+7d59-7d5d, U+7d63, U+7d65, U+7d67, U+7d6a, U+7d6e, U+7d70, U+7d72-7d73, U+7d78, U+7d7a-7d7b, U+7d7d, U+7d7f, U+7d81-7d83, U+7d85-7d86, U+7d88-7d89, U+7d8b-7d8d, U+7d8f, U+7d91, U+7d93, U+7d96-7d97, U+7d9b-7da0, U+7da2-7da3, U+7da6-7da7, U+7daa-7dac, U+7dae-7db0, U+7db3, U+7db5-7db9, U+7dbd, U+7dc0, U+7dc2-7dc7, U+7dcc-7dce, U+7dd0, U+7dd5-7dd9, U+7ddc-7dde, U+7de1-7de6, U+7dea-7ded, U+7df1-7df2, U+7df5-7df6, U+7df9-7dfa, U+7e00, U+7e05, U+7e08-7e0b, U+7e10-7e12, U+7e15, U+7e17, U+7e1c-7e1d, U+7e1f-7e23, U+7e27-7e28, U+7e2c-7e2d, U+7e2f, U+7e31-7e33, U+7e35-7e37, U+7e39-7e3b, U+7e3d, U+7e3f, U+7e43-7e48, U+7e4e, U+7e50, U+7e52, U+7e56, U+7e58-7e5a, U+7e5d-7e5f, U+7e61-7e62, U+7e65-7e67, U+7e69-7e6b, U+7e6d-7e6f, U+7e73, U+7e75, U+7e78-7e79, U+7e7b-7e7f, U+7e81-7e83, U+7e86-7e8a, U+7e8c-7e8e, U+7e90-7e96, U+7e98, U+7e9a-7e9f, U+7f38, U+7f3a-7f3f, U+7f43-7f45, U+7f47, U+7f4c-7f50, U+7f52-7f55, U+7f58, U+7f5b-7f5d, U+7f5f, U+7f61, U+7f63-7f69, U+7f6b, U+7f6d, U+7f71;
    }
    /* [24] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.24.woff2) format('woff2');
      unicode-range: U+7bc8, U+7bca-7bcc, U+7bcf, U+7bd4, U+7bd6-7bd7, U+7bd9-7bdb, U+7bdd, U+7be5-7be6, U+7be8-7bea, U+7bf0, U+7bf2-7bfa, U+7bfc, U+7bfe, U+7c00-7c04, U+7c06-7c07, U+7c09, U+7c0b-7c0f, U+7c11-7c14, U+7c17, U+7c19, U+7c1b, U+7c1e-7c20, U+7c23, U+7c25-7c28, U+7c2a-7c2c, U+7c2f, U+7c31, U+7c33-7c34, U+7c36-7c3a, U+7c3d-7c3e, U+7c40, U+7c42-7c43, U+7c45-7c46, U+7c4a, U+7c4c, U+7c4f-7c5f, U+7c61, U+7c63-7c65, U+7c67, U+7c69, U+7c6c-7c70, U+7c72, U+7c75, U+7c79, U+7c7b-7c7e, U+7c81-7c83, U+7c86-7c87, U+7c8d, U+7c8f-7c90, U+7c94, U+7c9e, U+7ca0-7ca2, U+7ca4-7ca6, U+7ca8, U+7cab, U+7cad-7cae, U+7cb0-7cb3, U+7cb6-7cb7, U+7cb9-7cbd, U+7cbf-7cc0, U+7cc2, U+7cc4-7cc5, U+7cc7-7cca, U+7ccd-7ccf, U+7cd2-7cd5, U+7cd7-7cda, U+7cdc-7cdd, U+7cdf-7ce0, U+7ce2, U+7ce6, U+7ce9, U+7ceb, U+7cef, U+7cf2, U+7cf4-7cf6, U+7cf9-7cfa, U+7cfe, U+7d02-7d03, U+7d06-7d0a, U+7d0f, U+7d11-7d13, U+7d15-7d16, U+7d1c-7d1e, U+7d23, U+7d26, U+7d2a, U+7d2c-7d2e, U+7d31-7d32, U+7d35, U+7d3c-7d41, U+7d43, U+7d45, U+7d47-7d48, U+7d4b, U+7d4d-7d4f, U+7d51, U+7d53, U+7d55-7d56;
    }
    /* [25] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.25.woff2) format('woff2');
      unicode-range: U+7a17-7a19, U+7a1b, U+7a1e-7a21, U+7a27, U+7a2b, U+7a2d, U+7a2f-7a31, U+7a34-7a35, U+7a37-7a3b, U+7a3e, U+7a43-7a49, U+7a4c, U+7a4e, U+7a50, U+7a55-7a57, U+7a59, U+7a5c-7a5d, U+7a5f-7a63, U+7a65, U+7a67, U+7a69-7a6a, U+7a6d, U+7a70, U+7a75, U+7a78-7a79, U+7a7d-7a7e, U+7a80, U+7a82, U+7a84-7a86, U+7a88, U+7a8a-7a8b, U+7a90-7a91, U+7a94-7a98, U+7a9e, U+7aa0, U+7aa3, U+7aa9, U+7aac, U+7ab0, U+7ab3, U+7ab5-7ab6, U+7ab9-7abf, U+7ac3, U+7ac5-7aca, U+7acc-7acf, U+7ad1-7ad3, U+7ad5, U+7ada-7adb, U+7add, U+7adf, U+7ae1-7ae2, U+7ae6-7aed, U+7af0-7af1, U+7af4, U+7af8, U+7afa-7afb, U+7afd-7afe, U+7b02, U+7b04, U+7b06-7b08, U+7b0a-7b0b, U+7b0f, U+7b12, U+7b14, U+7b18-7b19, U+7b1e-7b1f, U+7b23, U+7b25, U+7b27-7b2b, U+7b2d-7b31, U+7b33-7b36, U+7b3b, U+7b3d, U+7b3f-7b41, U+7b45, U+7b47, U+7b4c-7b50, U+7b53, U+7b55, U+7b5d, U+7b60, U+7b64-7b66, U+7b69-7b6a, U+7b6c-7b75, U+7b77, U+7b79-7b7a, U+7b7f, U+7b84, U+7b86, U+7b89, U+7b8d-7b92, U+7b96, U+7b98-7ba0, U+7ba5, U+7bac-7bad, U+7baf-7bb0, U+7bb2, U+7bb4-7bb6, U+7bba-7bbd, U+7bc1-7bc2, U+7bc5-7bc6;
    }
    /* [26] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.26.woff2) format('woff2');
      unicode-range: U+7851-7852, U+785c, U+785e, U+7860-7861, U+7863-7864, U+7868, U+786a, U+786e-786f, U+7872, U+7874, U+787a, U+787c, U+787e, U+7886-7887, U+788a, U+788c-788f, U+7893-7895, U+7898, U+789a, U+789d-789f, U+78a1, U+78a3-78a4, U+78a8-78aa, U+78ac-78ad, U+78af-78b3, U+78b5, U+78bb-78bf, U+78c5-78cc, U+78ce, U+78d1-78d6, U+78da-78db, U+78df-78e1, U+78e4, U+78e6-78e7, U+78ea, U+78ec, U+78f2-78f4, U+78f6-78f7, U+78f9-78fb, U+78fd-7901, U+7906-7907, U+790c, U+7910-7912, U+7919-791c, U+791e-7920, U+7925-792e, U+7930-7931, U+7934-7935, U+793b, U+793d, U+793f, U+7941-7942, U+7944-7946, U+794a-794b, U+794f, U+7951, U+7954-7955, U+7957-7958, U+795a-795c, U+795f-7960, U+7962, U+7967, U+7969, U+796b, U+7972, U+7977, U+7979-797c, U+797e-7980, U+798a-798e, U+7991, U+7993-7996, U+7998, U+799b-799d, U+79a1, U+79a6-79ab, U+79ae-79b1, U+79b3-79b4, U+79b8-79bb, U+79bd-79be, U+79c2, U+79c4, U+79c7-79ca, U+79cc-79cd, U+79cf, U+79d4-79d6, U+79da, U+79dd-79e3, U+79e5, U+79e7, U+79ea-79ed, U+79f1, U+79f8, U+79fc, U+7a02-7a03, U+7a05, U+7a07-7a0a, U+7a0c-7a0d, U+7a11, U+7a15;
    }
    /* [27] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.27.woff2) format('woff2');
      unicode-range: U+768c-768e, U+7690, U+7693, U+7695-7696, U+7699-76a8, U+76aa, U+76ad, U+76af-76b0, U+76b4, U+76b6-76ba, U+76bd, U+76c1-76c3, U+76c5, U+76c8-76c9, U+76cb-76ce, U+76d2, U+76d4, U+76d6, U+76d9, U+76dc, U+76de, U+76e0-76e1, U+76e5-76e8, U+76ea-76ec, U+76f0-76f1, U+76f6, U+76f9, U+76fb-76fc, U+7700, U+7704, U+7706-7708, U+770a, U+770e, U+7712, U+7714-7715, U+7717, U+7719-771c, U+7722, U+7724-7726, U+7728, U+772d-772f, U+7734-7739, U+773d-773e, U+7742, U+7745-7747, U+774a, U+774d-774f, U+7752, U+7756-7758, U+775a-775c, U+775e-7760, U+7762, U+7764-7765, U+7767, U+776a-776c, U+7770, U+7772-7774, U+7779-777a, U+777c-7780, U+7784, U+778b-778e, U+7794-7796, U+779a, U+779e-77a0, U+77a2, U+77a4-77a5, U+77a7, U+77a9-77aa, U+77ae-77b1, U+77b5-77b7, U+77b9, U+77bb-77bf, U+77c3, U+77c7, U+77c9, U+77cd, U+77d1-77d2, U+77d5, U+77d7, U+77d9-77da, U+77dc, U+77de-77e0, U+77e3-77e4, U+77e6-77e7, U+77e9-77ea, U+77ec, U+77ee, U+77f0-77f1, U+77f4, U+77f8, U+77fb-77fc, U+7805-7806, U+7809, U+780c-780e, U+7811-7812, U+7819, U+781d, U+7820-7823, U+7826-7827, U+782c-782e, U+7830, U+7835, U+7837, U+783a, U+783f, U+7843-7845, U+7847-7848, U+784c, U+784e-784f;
    }
    /* [28] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.28.woff2) format('woff2');
      unicode-range: U+7511-7513, U+7515-7517, U+751c, U+751e, U+7520-7522, U+7524, U+7526-7527, U+7529-752c, U+752f, U+7536, U+7538-7539, U+753c-7540, U+7543-7544, U+7546-754b, U+754d-7550, U+7552, U+7557, U+755a-755b, U+755d-755f, U+7561-7562, U+7564, U+7566-7567, U+7569, U+756b-756d, U+756f, U+7571-7572, U+7574-757e, U+7581-7582, U+7585-7587, U+7589-758c, U+758f-7590, U+7592-7595, U+7599-759a, U+759c-759d, U+75a2-75a5, U+75b0-75b1, U+75b3-75b5, U+75b7-75b8, U+75ba, U+75bd, U+75bf-75c4, U+75c6, U+75ca, U+75cc-75cf, U+75d3-75d4, U+75d7-75d8, U+75dc-75e1, U+75e3-75e4, U+75e7, U+75ec, U+75ee-75f3, U+75f9, U+75fc, U+75fe-7604, U+7607-760c, U+760f, U+7612-7613, U+7615-7616, U+7618-7619, U+761b-7629, U+762d, U+7630, U+7632-7635, U+7638-763c, U+7640-7641, U+7643-764b, U+764e, U+7655, U+7658-7659, U+765c, U+765f, U+7661-7662, U+7664-7665, U+7667-766a, U+766c-7672, U+7674, U+7676, U+7678, U+7680-7683, U+7685, U+7688, U+768b;
    }
    /* [29] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.29.woff2) format('woff2');
      unicode-range: U+736c, U+736e-7371, U+7375, U+7377-737c, U+7380-7381, U+7383, U+7385-7386, U+738a, U+738e, U+7390, U+7393-7398, U+739c, U+739e-73a0, U+73a2, U+73a5-73a6, U+73a8, U+73aa-73ab, U+73ad, U+73b3, U+73b5, U+73b7, U+73b9-73bd, U+73bf, U+73c5-73c6, U+73c9-73cc, U+73ce-73cf, U+73d2-73d3, U+73d6, U+73d9, U+73dd-73de, U+73e1, U+73e3-73e7, U+73e9-73ea, U+73ee, U+73f1, U+73f4-73f5, U+73f7-73fb, U+73fd, U+73ff-7401, U+7404-7405, U+7407, U+740a, U+7411, U+7413, U+741a-741b, U+7421, U+7424, U+7426, U+7428-7431, U+7433, U+7439-743a, U+743f-7441, U+7443-7444, U+7446-7447, U+744b, U+744d, U+7451-7453, U+7455, U+7457, U+7459-745a, U+745c-745d, U+745f, U+7462-7464, U+7466-746b, U+746d-7473, U+7476, U+747e, U+7480-7481, U+7485-7489, U+748b, U+748f-7492, U+7497-749a, U+749c, U+749e-74a3, U+74a5-74a6, U+74a8-74ab, U+74ae-74af, U+74b1-74b2, U+74b5, U+74b9-74bb, U+74bd, U+74bf, U+74c8-74ca, U+74cc, U+74cf-74d0, U+74d3-74d4, U+74d6, U+74d8, U+74da-74db, U+74de-74e0, U+74e3-74e4, U+74e7-74eb, U+74ee-74f2, U+74f4, U+74f7-74f8, U+74fa-74fc, U+74ff, U+7501, U+7503-7506, U+750c-750e;
    }
    /* [30] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.30.woff2) format('woff2');
      unicode-range: U+7166, U+7168, U+716c, U+7179, U+7180, U+7184-7185, U+7187-7188, U+718c, U+718f, U+7192, U+7194-7196, U+7199-719b, U+71a0, U+71a2, U+71a8, U+71ac, U+71ae-71b0, U+71b2-71b3, U+71b9-71ba, U+71be-71c1, U+71c4, U+71c9, U+71cb-71cc, U+71ce, U+71d0, U+71d2-71d4, U+71d6-71d7, U+71d9-71da, U+71dc, U+71df-71e0, U+71e6-71e7, U+71ec-71ee, U+71f4-71f5, U+71f8-71f9, U+71fc, U+71fe-7200, U+7207-7209, U+720d, U+7210, U+7213, U+7215, U+7217, U+721a, U+721d, U+721f, U+7224, U+7228, U+722b, U+722d, U+722f-7230, U+7232, U+7234, U+7238-7239, U+723b-723c, U+723e-7243, U+7245-7246, U+724b, U+724e-7250, U+7252-7253, U+7255-7258, U+725a, U+725c, U+725e, U+7260, U+7263, U+7268, U+726b, U+726e-726f, U+7271, U+7274, U+7277-7278, U+727b-727c, U+727e-7282, U+7284, U+7287, U+7289, U+728d-728e, U+7292-7293, U+7296, U+729b, U+72a2, U+72a7-72a8, U+72ad-72ae, U+72b0-72b2, U+72b4, U+72b9, U+72be, U+72c0-72c1, U+72c3-72c4, U+72c6-72c7, U+72c9, U+72cc, U+72ce, U+72d2, U+72d5-72d6, U+72d8, U+72df-72e2, U+72e5, U+72f3-72f4, U+72f7, U+72f9-72fb, U+72fd-72fe, U+7302, U+7304-7305, U+7307, U+730a-730b, U+730d, U+7312-7313, U+7316-7319, U+731c-731e, U+7322, U+7324, U+7327-7329, U+732c, U+732f, U+7331-7337, U+7339-733b, U+733d-733e, U+7343, U+734d-7350, U+7352, U+7356-7358, U+735d-7360, U+7366-736b;
    }
    /* [31] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.31.woff2) format('woff2');
      unicode-range: U+6f58-6f5b, U+6f5d-6f5e, U+6f60-6f62, U+6f66, U+6f68, U+6f6c-6f6d, U+6f6f, U+6f74, U+6f78, U+6f7a, U+6f7c-6f7e, U+6f80, U+6f82-6f83, U+6f86-6f88, U+6f8b-6f8e, U+6f90-6f94, U+6f96-6f98, U+6f9a, U+6f9d, U+6f9f-6fa1, U+6fa3, U+6fa5-6fa8, U+6fae-6fb1, U+6fb3, U+6fb5-6fb7, U+6fb9, U+6fbc, U+6fbe, U+6fc2, U+6fc5-6fca, U+6fd4-6fd5, U+6fd8, U+6fda-6fdb, U+6fde-6fe0, U+6fe4, U+6fe8-6fe9, U+6feb-6fec, U+6fee, U+6ff0, U+6ff3, U+6ff5-6ff6, U+6ff9-6ffa, U+6ffc-6ffe, U+7000-7001, U+7005-7007, U+7009-700b, U+700d, U+700f, U+7011, U+7015, U+7017-7018, U+701a-701b, U+701d-7020, U+7023, U+7026, U+7028, U+702f-7030, U+7032, U+7034, U+7037, U+7039-703a, U+703c, U+703e, U+7043-7044, U+7047-704c, U+704e, U+7051, U+7054-7055, U+705d-705e, U+7064-7065, U+7069, U+706c, U+706e, U+7075-7076, U+707e, U+7081, U+7085-7086, U+7094-7098, U+709b, U+709f, U+70a4, U+70ab-70ac, U+70ae-70b1, U+70b3-70b4, U+70b7, U+70bb, U+70ca-70cb, U+70d1, U+70d3-70d6, U+70d8-70d9, U+70dc-70dd, U+70df, U+70e4, U+70ec, U+70f1, U+70fa, U+70fd, U+7103-7108, U+710b-710c, U+710f, U+7114, U+7119, U+711c, U+711e, U+7120, U+712b, U+712d-7131, U+7138, U+7141, U+7145-7147, U+7149-714b, U+7150-7153, U+7155-7157, U+715a, U+715c, U+715e, U+7160, U+7162, U+7164-7165;
    }
    /* [32] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.32.woff2) format('woff2');
      unicode-range: U+6d7c, U+6d80-6d82, U+6d85, U+6d87, U+6d89-6d8a, U+6d8c-6d8e, U+6d91-6d98, U+6d9c, U+6daa-6dac, U+6dae, U+6db4-6db5, U+6db7-6db9, U+6dbd, U+6dbf, U+6dc2, U+6dc4-6dc8, U+6dca, U+6dcc, U+6dce-6dd0, U+6dd2, U+6dd5-6dd6, U+6dd8-6ddb, U+6ddd-6de0, U+6de2, U+6de4-6de6, U+6de8-6dea, U+6dec, U+6dee-6df0, U+6df2, U+6df4, U+6df6, U+6df8-6dfa, U+6dfc, U+6e00, U+6e04, U+6e0a, U+6e17, U+6e19, U+6e1d-6e20, U+6e22-6e25, U+6e27, U+6e2b, U+6e2d-6e2e, U+6e32, U+6e34, U+6e36, U+6e38-6e3c, U+6e42-6e45, U+6e48-6e49, U+6e4b-6e4f, U+6e51-6e54, U+6e57, U+6e5b-6e5f, U+6e62-6e63, U+6e68, U+6e6b, U+6e6e, U+6e72-6e73, U+6e76, U+6e7b, U+6e7d, U+6e82, U+6e89, U+6e8c-6e8d, U+6e8f, U+6e93, U+6e98-6e99, U+6e9f-6ea0, U+6ea5, U+6ea7, U+6eaa-6eab, U+6ead-6eaf, U+6eb1-6eb4, U+6eb7, U+6ebb-6ebd, U+6ebf-6ec4, U+6ec7-6eca, U+6ecc-6ecf, U+6ed3-6ed5, U+6ed9-6edb, U+6ee6, U+6eeb-6eef, U+6ef7-6ef9, U+6efb, U+6efd-6eff, U+6f04, U+6f08-6f0a, U+6f0c-6f0d, U+6f10-6f11, U+6f13, U+6f15-6f16, U+6f18, U+6f1a-6f1b, U+6f25-6f26, U+6f29-6f2a, U+6f2d, U+6f2f-6f33, U+6f35-6f36, U+6f38, U+6f3b-6f3c, U+6f3e-6f3f, U+6f41, U+6f45, U+6f4f, U+6f51-6f53, U+6f57;
    }
    /* [33] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.33.woff2) format('woff2');
      unicode-range: U+6b85, U+6b89, U+6b8d, U+6b95, U+6b97-6b98, U+6b9b, U+6b9e-6ba0, U+6ba2-6ba4, U+6ba8-6bb3, U+6bb7-6bb9, U+6bbc-6bbe, U+6bc0, U+6bc3-6bc4, U+6bc6-6bc9, U+6bcb-6bcc, U+6bcf, U+6bd3, U+6bd6-6bd8, U+6bda, U+6bdf, U+6be1, U+6be3, U+6be6-6be7, U+6beb-6bec, U+6bee, U+6bf1, U+6bf3, U+6bf7, U+6bf9, U+6bff, U+6c02, U+6c04-6c05, U+6c08-6c0a, U+6c0d-6c0e, U+6c10, U+6c12-6c14, U+6c19, U+6c1b, U+6c1f, U+6c24, U+6c26-6c28, U+6c2c, U+6c2e, U+6c33, U+6c35-6c36, U+6c3a-6c3b, U+6c3e-6c40, U+6c4a-6c4b, U+6c4d, U+6c4f, U+6c52, U+6c54-6c55, U+6c59, U+6c5b-6c5e, U+6c62, U+6c67-6c68, U+6c6a-6c6b, U+6c6d, U+6c6f, U+6c73-6c74, U+6c76, U+6c78-6c79, U+6c7b, U+6c7e, U+6c81-6c87, U+6c89, U+6c8c-6c8d, U+6c90, U+6c92-6c95, U+6c97-6c98, U+6c9a-6c9c, U+6c9f, U+6caa-6cae, U+6cb0-6cb2, U+6cb4, U+6cba, U+6cbd-6cbe, U+6cc2, U+6cc5-6cc6, U+6ccd, U+6ccf-6cd4, U+6cd6-6cd7, U+6cd9-6cdd, U+6ce0, U+6ce7, U+6ce9-6cef, U+6cf1-6cf2, U+6cf4, U+6cfb, U+6d00-6d01, U+6d04, U+6d07, U+6d0a, U+6d0c, U+6d0e-6d0f, U+6d11, U+6d13, U+6d19-6d1a, U+6d1f, U+6d24, U+6d26-6d28, U+6d2b, U+6d2e-6d2f, U+6d31, U+6d33-6d36, U+6d38-6d39, U+6d3c-6d3d, U+6d3f, U+6d57-6d5b, U+6d5e-6d61, U+6d64-6d65, U+6d67, U+6d6c, U+6d6f-6d70, U+6d79;
    }
    /* [34] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.34.woff2) format('woff2');
      unicode-range: U+69dd-69de, U+69e2-69e3, U+69e5, U+69e7-69eb, U+69ed-69ef, U+69f1-69f6, U+69f9, U+69fe-6a01, U+6a03, U+6a05, U+6a0a, U+6a0c, U+6a0f, U+6a11-6a15, U+6a17, U+6a1a-6a1b, U+6a1d-6a20, U+6a22-6a24, U+6a28, U+6a2e, U+6a30, U+6a32-6a38, U+6a3b, U+6a3e-6a3f, U+6a44-6a4a, U+6a4e, U+6a50-6a52, U+6a54-6a56, U+6a5b, U+6a61-6a62, U+6a64, U+6a66-6a67, U+6a6a-6a6b, U+6a71-6a73, U+6a78, U+6a7a, U+6a7e-6a7f, U+6a81, U+6a83-6a84, U+6a86-6a87, U+6a89, U+6a8b, U+6a8d, U+6a90-6a91, U+6a94, U+6a97, U+6a9b, U+6a9d-6aa3, U+6aa5, U+6aaa-6aac, U+6aae-6ab1, U+6ab3-6ab4, U+6ab8, U+6abb, U+6abd-6abf, U+6ac1-6ac3, U+6ac6, U+6ac8-6ac9, U+6acc, U+6ad0-6ad1, U+6ad3-6ad6, U+6ada-6adf, U+6ae2, U+6ae4, U+6ae7-6ae8, U+6aea, U+6aec, U+6af0-6af3, U+6af8, U+6afa, U+6afc-6afd, U+6b02-6b03, U+6b06-6b07, U+6b09-6b0b, U+6b0f-6b12, U+6b16-6b17, U+6b1b, U+6b1d-6b1f, U+6b23-6b24, U+6b28, U+6b2b-6b2c, U+6b2f, U+6b35-6b39, U+6b3b, U+6b3d, U+6b3f, U+6b43, U+6b46-6b47, U+6b49-6b4a, U+6b4d-6b4e, U+6b50, U+6b52, U+6b54, U+6b56, U+6b58-6b59, U+6b5b, U+6b5d, U+6b5f-6b61, U+6b65, U+6b67, U+6b6b-6b6c, U+6b6e, U+6b70, U+6b72, U+6b75, U+6b77-6b7a, U+6b7d-6b84;
    }
    /* [35] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.35.woff2) format('woff2');
      unicode-range: U+6855, U+6857-6859, U+685b, U+685d, U+685f, U+6863, U+6867, U+686b, U+686e-6872, U+6874-6875, U+6877, U+6879-687c, U+687e-687f, U+6882-6884, U+6886, U+6888, U+688d-6890, U+6894, U+6896, U+6898-689c, U+689f-68a3, U+68a5-68a7, U+68a9-68ab, U+68ad-68af, U+68b2-68b5, U+68b9-68bc, U+68c3, U+68c5-68c6, U+68c8-68ca, U+68cc-68cd, U+68cf-68d1, U+68d3-68d9, U+68dc-68dd, U+68e0-68e1, U+68e3-68e5, U+68e7-68e8, U+68ea-68ed, U+68ef-68f1, U+68f5-68f7, U+68f9, U+68fb-68fd, U+6900-6901, U+6903-6904, U+6906-690c, U+690f-6911, U+6913, U+6916-6917, U+6919-691b, U+6921-6923, U+6925-6926, U+6928, U+692a, U+6930-6931, U+6933-6936, U+6938-6939, U+693b, U+693d, U+6942, U+6945-6946, U+6949, U+694e, U+6954, U+6957, U+6959, U+695b-695e, U+6961-6966, U+6968-696c, U+696e-6974, U+6977-697b, U+697e-6981, U+6986, U+698d, U+6991-6992, U+6994-6996, U+6998, U+699c, U+69a0-69a1, U+69a5-69a8, U+69ab, U+69ad, U+69af-69b2, U+69b4, U+69b7-69b8, U+69ba-69bc, U+69be-69c1, U+69c3, U+69c5, U+69c7-69c8, U+69ca, U+69ce-69d1, U+69d3, U+69d6-69d7, U+69d9;
    }
    /* [36] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.36.woff2) format('woff2');
      unicode-range: U+667e-6680, U+6683-6684, U+6688, U+668b-668e, U+6690, U+6692, U+6698-669d, U+669f-66a0, U+66a2, U+66a4, U+66ad, U+66b1-66b3, U+66b5, U+66b8-66b9, U+66bb-66bc, U+66be-66c4, U+66c6, U+66c8-66c9, U+66cc, U+66ce-66cf, U+66d4, U+66da-66db, U+66dd, U+66df-66e0, U+66e6, U+66e8-66e9, U+66eb-66ec, U+66ee, U+66f5, U+66f7, U+66fa-66fc, U+6701, U+6705, U+6707, U+670c, U+670e-6710, U+6712-6716, U+6719, U+671c, U+671e, U+6720, U+6722, U+6725-6726, U+672e, U+6733, U+6735-6738, U+673e-673f, U+6741, U+6743, U+6745-6748, U+674c-674d, U+6753-6755, U+6759, U+675d-675e, U+6760, U+6762-6764, U+6766, U+676a, U+676c, U+676e, U+6770, U+6772-6774, U+6776-6777, U+677b-677c, U+6780-6781, U+6784-6785, U+6787, U+6789, U+678b-678c, U+678e-678f, U+6791-6793, U+6796, U+6798-6799, U+679b, U+67a1, U+67a4, U+67a6, U+67a9, U+67b0-67b5, U+67b7-67b9, U+67bb-67be, U+67c0-67c3, U+67c5-67c6, U+67c8-67c9, U+67ce, U+67d2, U+67d7-67d9, U+67db-67de, U+67e1-67e2, U+67e4, U+67e6-67e7, U+67e9, U+67ec, U+67ee-67f0, U+67f2, U+67f6-67f7, U+67f9-67fa, U+67fc, U+67fe, U+6801-6802, U+6805, U+6810, U+6814, U+6818-6819, U+681d, U+681f, U+6822, U+6827-6829, U+682b-682d, U+682f-6834, U+683b, U+683e-6840, U+6844-6846, U+6849-684a, U+684c-684e, U+6852-6854;
    }
    /* [37] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.37.woff2) format('woff2');
      unicode-range: U+64d2, U+64d4-64d5, U+64d7-64d8, U+64da, U+64e0-64e1, U+64e3-64e5, U+64e7, U+64e9-64ea, U+64ed, U+64ef-64f2, U+64f4-64f7, U+64fa-64fb, U+64fd-6501, U+6504-6505, U+6508-650a, U+650f, U+6513-6514, U+6516, U+6518-6519, U+651b-651f, U+6522, U+6524, U+6526, U+6529-652c, U+652e, U+6531-6532, U+6534-6538, U+653a, U+653c-653d, U+6543-6544, U+6547-6549, U+654d-654e, U+6550, U+6552, U+6554-6556, U+6558, U+655d-6560, U+6567, U+656b, U+6572, U+6578, U+657a, U+657d, U+6581-6585, U+6588, U+658a, U+658c, U+6592, U+6595, U+6598, U+659b, U+659d, U+659f-65a1, U+65a3-65a6, U+65ab, U+65ae, U+65b2-65b5, U+65b7-65b8, U+65be-65bf, U+65c1-65c4, U+65c6, U+65c8-65c9, U+65cc, U+65ce, U+65d0, U+65d2, U+65d4, U+65d6, U+65d8-65d9, U+65db, U+65df-65e1, U+65e3, U+65f0-65f2, U+65f4-65f5, U+65f9, U+65fb-65fc, U+65fe-6600, U+6603-6604, U+6608-660a, U+660d, U+6611-6612, U+6615-6616, U+661c-661e, U+6621-6624, U+6626, U+6629-662c, U+662e, U+6630-6631, U+6633-6637, U+6639-663b, U+663f-6641, U+6644-6646, U+6648-664a, U+664c, U+664e-664f, U+6651, U+6657-6665, U+6667-6668, U+666a-666d, U+6670, U+6673, U+6675, U+6677-6679, U+667b-667c;
    }
    /* [38] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.38.woff2) format('woff2');
      unicode-range: U+62cf, U+62d1, U+62d4-62d6, U+62da, U+62dc, U+62ea, U+62ee-62ef, U+62f1-62f2, U+62f4-62f5, U+62fc-62fd, U+62ff, U+6302-6304, U+6308-630d, U+6310, U+6313, U+6316, U+6318, U+631b, U+6327, U+6329-632a, U+632d, U+6332, U+6335-6336, U+6339-633c, U+633e, U+6341-6344, U+6346, U+634a-634e, U+6350, U+6352-6354, U+6358-6359, U+635b, U+6365-6366, U+6369, U+636b-636d, U+6371-6372, U+6374-6378, U+637a, U+637c-637d, U+637f-6380, U+6382, U+6384, U+6387, U+6389-638a, U+638e-6390, U+6394-6396, U+6399-639a, U+639e, U+63a0, U+63a3-63a4, U+63a6, U+63a9, U+63ab-63af, U+63b5, U+63bd-63be, U+63c0-63c1, U+63c4-63c6, U+63c8, U+63ce, U+63d1-63d6, U+63dc, U+63e0, U+63e3, U+63e5, U+63e9-63ed, U+63f2-63f3, U+63f5-63f9, U+6406, U+6409-640a, U+640f-6410, U+6412-6414, U+6416-6418, U+641e, U+6420, U+6422, U+6424-6426, U+6428-642a, U+642f-6430, U+6434-6436, U+643d, U+643f, U+644b, U+644e-644f, U+6451-6454, U+645a-645d, U+645f-6461, U+6463, U+6467, U+646d, U+6473-6474, U+6476, U+6478-6479, U+647b, U+647d, U+6485, U+6487-6488, U+648f-6491, U+6493, U+6495, U+6498-649b, U+649d-649f, U+64a1, U+64a3, U+64a6, U+64a8-64a9, U+64ac, U+64b3, U+64bb-64bf, U+64c2, U+64c4-64c5, U+64c7, U+64c9-64cc, U+64ce, U+64d0-64d1;
    }
    /* [39] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.39.woff2) format('woff2');
      unicode-range: U+6117, U+6119, U+611c, U+611e, U+6120-6122, U+6127-6128, U+612a-612c, U+6130-6131, U+6134-6137, U+6139-613a, U+613c-613f, U+6141-6142, U+6144-6147, U+6149-614a, U+614d, U+6153, U+6158-615a, U+615d-6160, U+6164-6165, U+616b-616c, U+616f, U+6171-6175, U+6177-6178, U+617b-6181, U+6183-6184, U+6187, U+618a-618b, U+618d, U+6192-6194, U+6196-619a, U+619c-619d, U+619f-61a0, U+61a5, U+61a8, U+61aa-61ae, U+61b8-61ba, U+61bc, U+61be, U+61c0-61c3, U+61c6, U+61c8, U+61ca-61cf, U+61d5, U+61dc-61df, U+61e1-61e3, U+61e5-61e9, U+61ec-61ed, U+61ef, U+61f4-61f7, U+61fa, U+61fc-6201, U+6203-6204, U+6207-620a, U+620d-620e, U+6213-6215, U+621b-621e, U+6220-6223, U+6227, U+6229-622b, U+622e, U+6230-6233, U+6236, U+6239, U+623d-623e, U+6241-6244, U+6246, U+6248, U+624c, U+624e, U+6250-6252, U+6254, U+6256, U+6258, U+625a-625c, U+625e, U+6260-6261, U+6263-6264, U+6268, U+626d, U+626f, U+6273, U+627a-627e, U+6282-6283, U+6285, U+6289, U+628d-6290, U+6292-6294, U+6296, U+6299, U+629b, U+62a6, U+62a8, U+62ac, U+62b3, U+62b6-62b7, U+62ba-62bb, U+62be-62bf, U+62c2, U+62c4, U+62c6-62c8, U+62ca, U+62ce;
    }
    /* [40] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.40.woff2) format('woff2');
      unicode-range: U+5f6c-5f6d, U+5f6f, U+5f72-5f75, U+5f78, U+5f7a, U+5f7d-5f7f, U+5f82-5f83, U+5f87-5f89, U+5f8d, U+5f8f, U+5f91, U+5f96, U+5f99, U+5f9c-5f9d, U+5fa0, U+5fa2, U+5fa4, U+5fa7-5fa8, U+5fab-5fad, U+5faf-5fb1, U+5fb5, U+5fb7-5fb8, U+5fbc-5fbd, U+5fc4, U+5fc7-5fc9, U+5fcb, U+5fd0-5fd4, U+5fdd-5fde, U+5fe1-5fe2, U+5fe4, U+5fe8-5fea, U+5fec-5ff3, U+5ff6, U+5ff8, U+5ffa-5ffd, U+5fff, U+6007, U+600a, U+600d-6010, U+6013-6015, U+6017-601b, U+601f, U+6021-6022, U+6024, U+6026, U+6029, U+602b, U+602d, U+6031, U+6033, U+6035, U+603a, U+6040-6043, U+6046-604a, U+604c-604d, U+6051, U+6054-6057, U+6059-605a, U+605d, U+605f-6064, U+6067, U+606a-606c, U+6070-6071, U+6077, U+607e-607f, U+6081-6086, U+6088-608e, U+6091-6093, U+6095-6098, U+609a-609b, U+609d-609e, U+60a2, U+60a4-60a5, U+60a7-60a8, U+60b0-60b1, U+60b3-60b5, U+60b7-60b8, U+60bb, U+60bd-60be, U+60c2, U+60c4, U+60c6-60cb, U+60ce-60cf, U+60d3-60d5, U+60d8-60d9, U+60db, U+60dd-60df, U+60e1-60e2, U+60e5, U+60ee, U+60f0-60f2, U+60f4-60f8, U+60fa-60fd, U+6100, U+6102-6103, U+6106-6108, U+610a, U+610c-610e, U+6110-6114, U+6116;
    }
    /* [41] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.41.woff2) format('woff2');
      unicode-range: U+5d9b, U+5d9d, U+5d9f-5da0, U+5da2, U+5da4, U+5da7, U+5dab-5dac, U+5dae, U+5db0, U+5db2, U+5db4, U+5db7-5db9, U+5dbc-5dbd, U+5dc3, U+5dc7, U+5dc9, U+5dcb-5dce, U+5dd0-5dd3, U+5dd6-5dd9, U+5ddb, U+5de0, U+5de2, U+5de4, U+5de9, U+5df2, U+5df5, U+5df8-5df9, U+5dfd, U+5dff-5e00, U+5e07, U+5e0b, U+5e0d, U+5e11-5e12, U+5e14-5e15, U+5e18-5e1b, U+5e1f-5e20, U+5e25, U+5e28, U+5e2e, U+5e32, U+5e35-5e37, U+5e3e, U+5e40, U+5e43-5e44, U+5e47, U+5e49, U+5e4b, U+5e4e, U+5e50-5e51, U+5e54, U+5e56-5e58, U+5e5b-5e5c, U+5e5e-5e5f, U+5e62, U+5e64, U+5e68, U+5e6a-5e6e, U+5e70, U+5e75-5e77, U+5e7a, U+5e7f-5e80, U+5e87, U+5e8b, U+5e8e, U+5e96, U+5e99-5e9a, U+5ea0, U+5ea2, U+5ea4-5ea5, U+5ea8, U+5eaa, U+5eac, U+5eb1, U+5eb3, U+5eb8-5eb9, U+5ebd-5ebf, U+5ec1-5ec2, U+5ec6, U+5ec8, U+5ecb-5ecc, U+5ece-5ed6, U+5ed9-5ee2, U+5ee5, U+5ee8-5ee9, U+5eeb-5eec, U+5ef0-5ef1, U+5ef3-5ef4, U+5ef8-5ef9, U+5efc-5f00, U+5f02-5f03, U+5f06-5f09, U+5f0b-5f0e, U+5f11, U+5f16-5f17, U+5f19, U+5f1b-5f1e, U+5f21-5f24, U+5f27-5f29, U+5f2b-5f30, U+5f34, U+5f36, U+5f38, U+5f3a-5f3d, U+5f3f-5f41, U+5f44-5f45, U+5f47-5f48, U+5f4a, U+5f4c-5f4e, U+5f50-5f51, U+5f54, U+5f56-5f58, U+5f5b-5f5d, U+5f60, U+5f63-5f65, U+5f67, U+5f6a;
    }
    /* [42] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.42.woff2) format('woff2');
      unicode-range: U+5bbc, U+5bc0-5bc1, U+5bc3, U+5bc7, U+5bc9, U+5bcd-5bd0, U+5bd3-5bd4, U+5bd6-5bda, U+5bde, U+5be0-5be2, U+5be4-5be6, U+5be8, U+5beb-5bec, U+5bef-5bf1, U+5bf3-5bf6, U+5bfd, U+5c03, U+5c05, U+5c07-5c09, U+5c0c-5c0d, U+5c12-5c14, U+5c17, U+5c19, U+5c1e-5c20, U+5c22-5c24, U+5c26, U+5c28-5c2e, U+5c30, U+5c32, U+5c35-5c36, U+5c38-5c39, U+5c46, U+5c4d-5c50, U+5c53, U+5c59-5c5c, U+5c5f-5c63, U+5c67-5c69, U+5c6c-5c70, U+5c74-5c76, U+5c79-5c7d, U+5c87-5c88, U+5c8a, U+5c8c, U+5c8f, U+5c91-5c92, U+5c94, U+5c9d, U+5c9f-5ca0, U+5ca2-5ca3, U+5ca6-5ca8, U+5caa-5cab, U+5cad, U+5cb1-5cb2, U+5cb4-5cb7, U+5cba-5cbc, U+5cbe, U+5cc5, U+5cc7, U+5cc9, U+5ccb, U+5cd0, U+5cd2, U+5cd7, U+5cd9, U+5cdd, U+5ce6, U+5ce8-5cea, U+5ced-5cee, U+5cf1-5cf2, U+5cf4-5cf5, U+5cfa-5cfb, U+5cfd, U+5d01, U+5d06, U+5d0b, U+5d0d, U+5d10-5d12, U+5d14-5d15, U+5d17-5d1b, U+5d1d, U+5d1f-5d20, U+5d22-5d24, U+5d26-5d27, U+5d2b, U+5d31, U+5d34, U+5d39, U+5d3d, U+5d3f, U+5d42-5d43, U+5d46-5d48, U+5d4a-5d4b, U+5d4e, U+5d51-5d53, U+5d55, U+5d59, U+5d5c, U+5d5f-5d62, U+5d64, U+5d69-5d6a, U+5d6c-5d6d, U+5d6f-5d70, U+5d73, U+5d76, U+5d79-5d7a, U+5d7e-5d7f, U+5d81-5d84, U+5d87-5d88, U+5d8a, U+5d8c, U+5d90, U+5d92-5d95, U+5d97, U+5d99;
    }
    /* [43] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.43.woff2) format('woff2');
      unicode-range: U+598b-598e, U+5992, U+5995, U+5997, U+599b, U+599d, U+599f, U+59a3-59a4, U+59a7, U+59ad-59b0, U+59b2-59b3, U+59b7, U+59ba, U+59bc, U+59be, U+59c1, U+59c3-59c4, U+59c6, U+59c8, U+59ca, U+59cd, U+59d2, U+59d9-59da, U+59dd-59df, U+59e3-59e5, U+59e7-59e8, U+59ec, U+59ee-59ef, U+59f1-59f2, U+59f4, U+59f6-59f8, U+5a00, U+5a03-5a04, U+5a09, U+5a0c-5a0e, U+5a11-5a13, U+5a17, U+5a1a-5a1c, U+5a1e-5a1f, U+5a23-5a25, U+5a27-5a28, U+5a2a, U+5a2d, U+5a30, U+5a35-5a36, U+5a40-5a41, U+5a44-5a45, U+5a47-5a49, U+5a4c, U+5a50, U+5a55, U+5a5e, U+5a62-5a63, U+5a65, U+5a67, U+5a6a, U+5a6c-5a6d, U+5a77, U+5a7a-5a7b, U+5a7e, U+5a84, U+5a8b, U+5a90, U+5a93, U+5a96, U+5a99, U+5a9c, U+5a9e-5aa0, U+5aa2, U+5aa7, U+5aac, U+5ab1-5ab3, U+5ab5, U+5ab8, U+5aba-5abf, U+5ac2, U+5ac4, U+5ac6, U+5ac8, U+5acb, U+5acf-5ad0, U+5ad6-5ad7, U+5ada, U+5adc, U+5ae0-5ae1, U+5ae3, U+5ae5-5ae6, U+5ae9-5aea, U+5aee, U+5af0, U+5af5-5af6, U+5afa-5afb, U+5afd, U+5b00-5b01, U+5b08, U+5b0b, U+5b16-5b17, U+5b19, U+5b1b, U+5b1d, U+5b21, U+5b25, U+5b2a, U+5b2c-5b2d, U+5b30, U+5b32, U+5b34, U+5b36, U+5b38, U+5b3e, U+5b40-5b41, U+5b43, U+5b45, U+5b4b-5b4c, U+5b51-5b52, U+5b56, U+5b5a-5b5c, U+5b5e-5b5f, U+5b65, U+5b68-5b69, U+5b6e-5b71, U+5b73, U+5b75-5b76, U+5b7a, U+5b7c-5b84, U+5b86, U+5b8a-5b8b, U+5b8d-5b8e, U+5b90-5b91, U+5b93-5b94, U+5b96, U+5ba5-5ba6, U+5ba8-5ba9, U+5bac-5bad, U+5baf, U+5bb1-5bb2, U+5bb7-5bb8, U+5bba;
    }
    /* [44] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.44.woff2) format('woff2');
      unicode-range: U+57b3, U+57b8, U+57bd, U+57c0, U+57c3, U+57c6-57c8, U+57cc, U+57cf, U+57d2-57d7, U+57dc-57de, U+57e0-57e1, U+57e3-57e4, U+57e6-57e7, U+57e9, U+57ed, U+57f0, U+57f4-57f6, U+57f8, U+57fb, U+57fd-57ff, U+5803-5804, U+5808-580d, U+5819, U+581b, U+581d-5821, U+5826-5827, U+582d, U+582f-5830, U+5832, U+5835, U+5839, U+583d, U+583f-5840, U+5849, U+584b-584d, U+584f-5852, U+5855, U+5858-5859, U+585f, U+5861-5862, U+5864, U+5867-5868, U+586d, U+5870, U+5872, U+5878-5879, U+587c, U+587f-5881, U+5885, U+5887-588d, U+588f-5890, U+5894, U+5896, U+5898, U+589d-589e, U+58a0-58a2, U+58a6, U+58a9-58ab, U+58ae, U+58b1-58b3, U+58b8-58bc, U+58be, U+58c2-58c5, U+58c8, U+58cd-58ce, U+58d0-58da, U+58dc-58e2, U+58e4-58e5, U+58e9, U+58ec, U+58ef, U+58f3-58f4, U+58f7, U+58f9, U+58fb-58fd, U+5902, U+5905-5906, U+590a-590d, U+5910, U+5912-5914, U+5918-5919, U+591b, U+591d, U+591f, U+5921, U+5923-5925, U+5928, U+592c-592d, U+592f-5930, U+5932-5933, U+5935-5936, U+5938-5939, U+593d-593f, U+5943, U+5946, U+594e, U+5950, U+5952-5953, U+5955, U+5957-595b, U+595d-5961, U+5963, U+5967, U+5969, U+596b-596d, U+596f, U+5972, U+5975-5976, U+5978-5979, U+597b-597c, U+5981;
    }
    /* [45] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.45.woff2) format('woff2');
      unicode-range: U+5616-5617, U+5619, U+561b, U+5620, U+5628, U+562c, U+562f-5639, U+563b-563d, U+563f-5641, U+5643-5644, U+5646-5647, U+5649, U+564b, U+564d-5650, U+5653-5654, U+565e, U+5660-5664, U+5666, U+5669-566d, U+566f, U+5671-5672, U+5675-5676, U+5678, U+567a, U+5680, U+5684-5688, U+568a-568c, U+568f, U+5694-5695, U+5699-569a, U+569d-56a0, U+56a5-56a9, U+56ab-56ae, U+56b1-56b4, U+56b6-56b7, U+56bc, U+56be, U+56c0, U+56c2-56c3, U+56c5, U+56c8-56d1, U+56d3, U+56d7-56d9, U+56dc-56dd, U+56df, U+56e1, U+56e4-56e8, U+56eb, U+56ed-56ee, U+56f1, U+56f6-56f7, U+56f9, U+56ff-5704, U+5707-570a, U+570c-570d, U+5711, U+5713, U+5715-5716, U+5718, U+571a-571d, U+5720-5726, U+5729-572a, U+572c, U+572e-572f, U+5733-5734, U+5737-5738, U+573b, U+573d-573f, U+5745-5746, U+574c-574f, U+5751-5752, U+5759, U+575f, U+5761-5762, U+5764-5765, U+5767-5769, U+576b, U+576d-5771, U+5773-5775, U+5777, U+5779-577c, U+577e-577f, U+5781, U+5783, U+5788-5789, U+578c, U+5793-5795, U+5797, U+5799-579a, U+579c-57a1, U+57a4, U+57a7-57aa, U+57ac, U+57ae, U+57b0;
    }
    /* [46] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.46.woff2) format('woff2');
      unicode-range: U+543f-5440, U+5443-5444, U+5447, U+544c-544f, U+5455, U+545e, U+5462, U+5464, U+5466-5467, U+5469, U+546b-546e, U+5470-5471, U+5474-5477, U+547b, U+547f-5481, U+5483-5486, U+5488-548b, U+548d-5492, U+5495-5496, U+549c, U+549f-54a2, U+54a4, U+54a6-54af, U+54b1, U+54b7-54bc, U+54be-54bf, U+54c2-54c4, U+54c6-54c8, U+54ca, U+54cd-54ce, U+54d8, U+54e0, U+54e2, U+54e5-54e6, U+54e8-54ea, U+54ec-54ef, U+54f1, U+54f3, U+54f6, U+54fc-5501, U+5505, U+5508-5509, U+550c-550f, U+5514-5516, U+5527, U+552a-552b, U+552e, U+5532-5533, U+5535-5536, U+5538-5539, U+553b-553d, U+5540-5541, U+5544-5545, U+5547, U+5549-554a, U+554c-554d, U+5550-5551, U+5556-5558, U+555a-555e, U+5560-5561, U+5563-5564, U+5566, U+557b-5583, U+5586-5588, U+558a, U+558e-558f, U+5591-5594, U+5597, U+5599, U+559e-559f, U+55a3-55a4, U+55a8-55a9, U+55ac-55ae, U+55b2, U+55bf, U+55c1, U+55c3-55c4, U+55c6-55c7, U+55c9, U+55cb-55cc, U+55ce, U+55d1-55d4, U+55d7-55d8, U+55da-55db, U+55dd-55df, U+55e2, U+55e4, U+55e9, U+55ec, U+55ee, U+55f1, U+55f6-55f9, U+55fd-55ff, U+5605, U+5607-5608, U+560a, U+560d-5612;
    }
    /* [47] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.47.woff2) format('woff2');
      unicode-range: U+528d, U+5291-5298, U+529a, U+529c, U+52a4-52a7, U+52ab-52ad, U+52af-52b0, U+52b5-52b8, U+52ba-52be, U+52c0-52c1, U+52c4-52c6, U+52c8, U+52ca, U+52cc-52cd, U+52cf-52d2, U+52d4, U+52d6-52d7, U+52db-52dc, U+52de, U+52e0-52e1, U+52e3, U+52e5-52e6, U+52e8-52ea, U+52ec, U+52f0-52f1, U+52f3-52fb, U+5300-5301, U+5303, U+5306-5308, U+530a-530d, U+530f-5311, U+5313, U+5315, U+5318-531f, U+5321, U+5323-5325, U+5327-532d, U+532f-5333, U+5335, U+5338, U+533c-533e, U+5340, U+5342, U+5345-5346, U+5349, U+534b-534c, U+5359, U+535b, U+535e, U+5361, U+5363-5367, U+5369, U+536c-536e, U+5372, U+5377, U+5379-537b, U+537d-537f, U+5382-5383, U+5387-5389, U+538e, U+5393-5394, U+5396, U+5398-5399, U+539d, U+53a0-53a1, U+53a4-53a6, U+53a9-53ab, U+53ad-53b0, U+53b2, U+53b4-53b8, U+53ba, U+53bd, U+53c0-53c1, U+53c3-53c5, U+53cf, U+53d2-53d3, U+53d5, U+53da-53db, U+53dd-53e0, U+53e2, U+53e6-53e8, U+53ed-53ee, U+53f4-53f5, U+53fa, U+5401-5403, U+540b, U+540f, U+5412-5413, U+541a, U+541d-541e, U+5421, U+5424, U+5427-542a, U+542c-542f, U+5431, U+5433-5436, U+543c-543d;
    }
    /* [48] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.48.woff2) format('woff2');
      unicode-range: U+50dd-50df, U+50e1-50e6, U+50e8-50e9, U+50ed-50f6, U+50f9-50fb, U+50fe, U+5101-5103, U+5106-5109, U+510b-510e, U+5110, U+5112, U+5114-511e, U+5121, U+5123, U+5127-5128, U+512c-512d, U+512f, U+5131, U+5133-5135, U+5137-513c, U+513f-5142, U+5147, U+514a, U+514c, U+514f, U+5152-5155, U+5157-5158, U+515f-5160, U+5162, U+5164, U+5166-5167, U+5169-516a, U+516e, U+5173-5174, U+5179, U+517b, U+517e, U+5180, U+5182-5184, U+5189, U+518b-518c, U+518e-5191, U+5193, U+5195-5196, U+5198, U+519d, U+51a1-51a4, U+51a6, U+51a9-51ab, U+51ad, U+51b0-51b3, U+51b5, U+51b8, U+51ba, U+51bc-51bf, U+51c2-51c3, U+51c5, U+51c8-51cb, U+51cf, U+51d1-51d6, U+51d8, U+51de-51e0, U+51e2, U+51e5, U+51e7, U+51e9, U+51ec-51ee, U+51f2-51f5, U+51f7, U+51fe, U+5201-5202, U+5204-5205, U+520b, U+520e, U+5212-5216, U+5218, U+5222, U+5226-5228, U+522a-522b, U+522e, U+5231-5233, U+5235, U+523c, U+5244-5245, U+5249, U+524b-524c, U+524f, U+5254-5255, U+5257-5258, U+525a, U+525c-5261, U+5266, U+5269, U+526c, U+526e, U+5271, U+5273-5274, U+5277-5279, U+527d, U+527f-5280, U+5282-5285, U+5288-528a, U+528c;
    }
    /* [49] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.49.woff2) format('woff2');
      unicode-range: U+4f57-4f58, U+4f5a-4f5b, U+4f5d-4f5f, U+4f63-4f64, U+4f69-4f6a, U+4f6c, U+4f6e-4f71, U+4f76-4f7e, U+4f81-4f85, U+4f88-4f8a, U+4f8c, U+4f8e-4f90, U+4f92-4f94, U+4f96-4f9a, U+4f9e-4fa0, U+4fab, U+4fad, U+4faf, U+4fb2, U+4fb7, U+4fb9, U+4fbb-4fbe, U+4fc0-4fc1, U+4fc4-4fc6, U+4fc8-4fc9, U+4fcb-4fd4, U+4fd8, U+4fda-4fdc, U+4fdf-4fe0, U+4fe2, U+4fe4-4fe6, U+4fef-4ff2, U+4ff6, U+4ffc-5002, U+5004-5007, U+500a, U+500c, U+500e-5011, U+5013-5014, U+5016-5018, U+501a-501e, U+5021-5023, U+5025-502a, U+502c-502e, U+5030, U+5032-5033, U+5035, U+5039, U+503b, U+5040-5043, U+5045-5048, U+504a, U+504c, U+504e, U+5050-5053, U+5055-5057, U+5059-505a, U+505f-5060, U+5062-5063, U+5066-5067, U+506a, U+506c-506d, U+5070-5072, U+5077-5078, U+5080-5081, U+5083-5086, U+5088, U+508a, U+508e-5090, U+5092-5096, U+509a-509c, U+509e-50a3, U+50aa, U+50ad, U+50af-50b4, U+50b9-50bb, U+50bd, U+50c0, U+50c2-50c4, U+50c7, U+50c9-50ca, U+50cc, U+50ce, U+50d0-50d1, U+50d3-50d4, U+50d6, U+50d8-50d9, U+50dc;
    }
    /* [50] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.50.woff2) format('woff2');
      unicode-range: U+4093, U+4103, U+4105, U+4148, U+414f, U+4163, U+41b4, U+41bf, U+41e6, U+41ee, U+41f3, U+4207, U+420e, U+4264, U+4293, U+42c6, U+42d6, U+42dd, U+4302, U+432b, U+4343, U+43ee, U+43f0, U+4408, U+440c, U+4417, U+441c, U+4422, U+4453, U+445b, U+4476, U+447a, U+4491, U+44b3, U+44be, U+44d4, U+4508, U+450d, U+4525, U+4543, U+457a, U+459d, U+45b8, U+45be, U+45e5, U+45ea, U+460f-4610, U+4641, U+4665, U+46a1, U+46ae-46af, U+470c, U+471f, U+4764, U+47e6, U+47fd, U+4816, U+481e, U+4844, U+484e, U+48b5, U+49b0, U+49e7, U+49fa, U+4a04, U+4a29, U+4abc, U+4b38, U+4b3b, U+4b7e, U+4bc2, U+4bca, U+4bd2, U+4be8, U+4c17, U+4c20, U+4c38, U+4cc4, U+4cd1, U+4ce1, U+4d07, U+4d77, U+4e02, U+4e04-4e05, U+4e0c, U+4e0f-4e12, U+4e15, U+4e17, U+4e19, U+4e1e-4e1f, U+4e23-4e24, U+4e28-4e2c, U+4e2e-4e31, U+4e35-4e37, U+4e3f-4e42, U+4e44, U+4e47-4e48, U+4e4d-4e4e, U+4e51, U+4e55-4e56, U+4e58, U+4e5a-4e5c, U+4e62-4e63, U+4e68-4e69, U+4e74-4e75, U+4e79, U+4e7f, U+4e82, U+4e85, U+4e8a, U+4e8d-4e8e, U+4e96-4e99, U+4e9d-4ea0, U+4ea2, U+4ea5-4ea6, U+4ea8, U+4eaf-4eb0, U+4eb3, U+4eb6, U+4eb9, U+4ebb-4ebc, U+4ec2-4ec4, U+4ec6-4ec8, U+4ecd, U+4ed0, U+4ed7, U+4eda-4edb, U+4edd-4ee2, U+4ee8, U+4eeb, U+4eed, U+4eef, U+4ef1, U+4ef3, U+4ef5, U+4ef7, U+4efc-4f00, U+4f02-4f03, U+4f08-4f09, U+4f0b-4f0d, U+4f12, U+4f15-4f17, U+4f19, U+4f1c, U+4f2b, U+4f2e, U+4f30-4f31, U+4f33, U+4f35-4f37, U+4f39, U+4f3b, U+4f3e, U+4f40, U+4f42-4f43, U+4f48-4f49, U+4f4b-4f4c, U+4f52, U+4f54, U+4f56;
    }
    /* [51] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.51.woff2) format('woff2');
      unicode-range: U+3395-339b, U+339e-33a0, U+33a2-33ff, U+3402, U+3405-3406, U+3427, U+342c, U+342e, U+3468, U+346a, U+3488, U+3492, U+34b5, U+34bc, U+34c1, U+34c7, U+34db, U+351f, U+353e, U+355d-355e, U+3563, U+356e, U+35a6, U+35a8, U+35c5, U+35da, U+35de, U+35f4, U+3605, U+3614, U+364a, U+3691, U+3696, U+3699, U+36cf, U+3761-3762, U+376b-376c, U+3775, U+378d, U+37c1, U+37e2, U+37e8, U+37f4, U+37fd, U+3800, U+382f, U+3836, U+3840, U+385c, U+3861, U+38a1, U+38ad, U+38fa, U+3917, U+391a, U+396f, U+39a4, U+39b8, U+3a5c, U+3a6e, U+3a73, U+3a85, U+3ac4, U+3acb, U+3ad6-3ad7, U+3aea, U+3af3, U+3b0e, U+3b1a, U+3b1c, U+3b22, U+3b35, U+3b6d, U+3b77, U+3b87-3b88, U+3b8d, U+3ba4, U+3bb6, U+3bc3, U+3bcd, U+3bf0, U+3bf3, U+3c0f, U+3c26, U+3cc3, U+3cd2, U+3d11, U+3d1e, U+3d31, U+3d4e, U+3d64, U+3d9a, U+3dc0, U+3dcc, U+3dd4, U+3e05, U+3e3f-3e40, U+3e60, U+3e66, U+3e68, U+3e83, U+3e8a, U+3e94, U+3eda, U+3f57, U+3f72, U+3f75, U+3f77, U+3fae, U+3fb1, U+3fc9, U+3fd7, U+3fdc, U+4039, U+4058;
    }
    /* [52] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.52.woff2) format('woff2');
      unicode-range: U+32b5-332b, U+332d-3394;
    }
    /* [53] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.53.woff2) format('woff2');
      unicode-range: U+31c8-31e3, U+31f0-321e, U+3220-3230, U+3232-32b4;
    }
    /* [54] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.54.woff2) format('woff2');
      unicode-range: U+3028-303f, U+3094-3096, U+309f-30a0, U+30ee, U+30f7-30fa, U+30ff, U+3105-312f, U+3131-3163, U+3165-318e, U+3190-31bb, U+31c0-31c7;
    }
    /* [55] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.55.woff2) format('woff2');
      unicode-range: U+2f14-2fd5, U+2ff0-2ffb, U+3004, U+3013, U+3016-301b, U+301e, U+3020-3027;
    }
    /* [56] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.56.woff2) format('woff2');
      unicode-range: U+25e4-25e6, U+2601-2603, U+2609, U+260e-260f, U+2616-2617, U+261c-261f, U+262f, U+2641, U+2660, U+2662-2664, U+2666-2668, U+266d-266e, U+2672-267d, U+26bd-26be, U+2702, U+271a, U+273d, U+2740, U+2756, U+2776-2793, U+27a1, U+2934-2935, U+29bf, U+29fa-29fb, U+2b05-2b07, U+2b1a, U+2b95, U+2e3a-2e3b, U+2e80-2e99, U+2e9b-2ef3, U+2f00-2f13;
    }
    /* [57] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.57.woff2) format('woff2');
      unicode-range: U+24d1-24ff, U+2503-2513, U+2515-2516, U+2518-251b, U+251d-2522, U+2524-259f, U+25a2-25ab, U+25b1, U+25b7, U+25c0-25c1, U+25c9-25ca, U+25cc, U+25d0-25d3, U+25e2-25e3;
    }
    /* [58] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.58.woff2) format('woff2');
      unicode-range: U+2105, U+2109-210a, U+210f, U+2116, U+2121, U+2126-2127, U+212b, U+212e, U+2135, U+213b, U+2194-2199, U+21b8-21b9, U+21c4-21c6, U+21cb-21cc, U+21d0, U+21e6-21e9, U+21f5, U+2202-2203, U+2205-2206, U+2208-220b, U+220f, U+2211, U+2213, U+2215, U+221a, U+221d, U+2220, U+2223, U+2225-2226, U+2228, U+222a-222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+224c, U+2260, U+2262, U+2264-2265, U+226e-226f, U+2272-2273, U+2276-2277, U+2283-2287, U+228a-228b, U+2295-2299, U+22a0, U+22a5, U+22bf, U+22da-22db, U+22ef, U+2305-2307, U+2318, U+2329-232a, U+23b0-23b1, U+23be-23cc, U+23ce, U+23da-23db, U+2423, U+2469-24d0;
    }
    /* [59] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.59.woff2) format('woff2');
      unicode-range: U+a1-a4, U+a6-a7, U+aa, U+ac-ad, U+b5-b6, U+b8-ba, U+bc-c8, U+ca-cc, U+ce-d5, U+d9-db, U+dd-df, U+e6, U+ee, U+f0, U+f5, U+f7, U+f9, U+fb, U+fe-102, U+110-113, U+11a-11b, U+128-12b, U+143-144, U+147-148, U+14c, U+14e-14f, U+152-153, U+168-16d, U+192, U+1a0-1a1, U+1af, U+1cd-1dc, U+1f8-1f9, U+251, U+261, U+2bb, U+2c7, U+2c9, U+2ea-2eb, U+304, U+307, U+30c, U+1e3e-1e3f, U+1ea0-1ebe, U+1ec0-1ec6, U+1ec8-1ef9, U+2011-2012, U+2016, U+2018-201a, U+201e, U+2021, U+2030, U+2033, U+2035, U+2042, U+2047, U+2051, U+2074, U+20a9, U+20ab-20ac, U+20dd-20de, U+2100;
    }
    /* [60] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.60.woff2) format('woff2');
      unicode-range: U+2227, U+26a0, U+2713, U+301f, U+4ff8, U+5239, U+526a, U+54fa, U+5740, U+5937, U+5993, U+59fb, U+5a3c, U+5c41, U+6028, U+626e, U+646f, U+647a, U+64b0, U+64e2, U+65a7, U+66fe, U+6727, U+6955, U+6bef, U+6f23, U+724c, U+767c, U+7a83, U+7ac4, U+7b67, U+8000, U+8471, U+8513, U+8599, U+86db, U+8718, U+87f2, U+88f3, U+8ad2, U+8e2a, U+8fa3, U+95a5, U+9798, U+9910, U+9957, U+9bab, U+9c3b, U+9daf, U+ff95;
    }
    /* [61] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.61.woff2) format('woff2');
      unicode-range: U+a8, U+2032, U+2261, U+2282, U+3090, U+30f1, U+339c, U+535c, U+53d9, U+56a2, U+56c1, U+5806, U+589f, U+59d0, U+5a7f, U+60e0, U+639f, U+65af, U+68fa, U+69ae, U+6d1b, U+6ef2, U+71fb, U+725d, U+7262, U+75bc, U+7768, U+7940, U+79bf, U+7bed, U+7d68, U+7dfb, U+814b, U+8207, U+83e9, U+8494, U+8526, U+8568, U+85ea, U+86d9, U+87ba, U+8861, U+887f, U+8fe6, U+9059, U+9061, U+916a, U+976d, U+97ad, U+9ece;
    }
    /* [62] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.62.woff2) format('woff2');
      unicode-range: U+2d9, U+21d4, U+301d, U+515c, U+52fe, U+5420, U+5750, U+5766, U+5954, U+5b95, U+5f8a, U+5f98, U+620c, U+621f, U+641c, U+66d9, U+676d, U+6775, U+67f5, U+694a, U+6a02, U+6a3a, U+6a80, U+6c23, U+6c72, U+6dcb, U+6faa, U+707c, U+71c8, U+7422, U+74e2, U+7791, U+7825, U+7a14, U+7a1c, U+7c95, U+7fc1, U+82a5, U+82db, U+8304, U+853d, U+8cd3, U+8de8, U+8f0c, U+8f3f, U+9091, U+91c7, U+929a, U+98af, U+9913;
    }
    /* [63] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.63.woff2) format('woff2');
      unicode-range: U+2ca-2cb, U+2229, U+2468, U+2669, U+266f, U+273f, U+4ec0, U+4f60, U+4fb6, U+5347, U+540e, U+543b, U+5b0c, U+5d4c, U+5f14, U+5f9e, U+6155, U+62d0, U+6602, U+6666, U+66f3, U+67a2, U+67ca, U+69cc, U+6d29, U+6d9b, U+6e3e, U+6f81, U+7109, U+73c0, U+73c2, U+7425, U+7435-7436, U+7525, U+7554, U+785d, U+786b, U+7ae3, U+7b94, U+7d18, U+81bf, U+8511, U+8549, U+9075, U+9640, U+98e2, U+9e9f, U+ff96;
    }
    /* [64] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.64.woff2) format('woff2');
      unicode-range: U+2467, U+4ece, U+4ed4, U+4f91, U+4fae, U+534d, U+53c9, U+54b3, U+586b, U+5944, U+5b78, U+5df7, U+5f77, U+6101, U+6167-6168, U+61a4, U+62d9, U+698a, U+699b, U+6a59, U+6cc4, U+6e07, U+7099, U+75d2, U+77ad, U+7953, U+7984, U+7a92, U+7baa, U+7dbb, U+817f, U+82ad, U+85e9, U+868a, U+8caa, U+8f44, U+9017, U+907c, U+908a, U+92f3, U+936e, U+9435, U+978d, U+9838, U+9a28, U+9b41, U+9ba8, U+9c57, U+9eb9;
    }
    /* [65] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.65.woff2) format('woff2');
      unicode-range: U+b1, U+309b, U+4e5e, U+51f1, U+5506, U+55c5, U+58cc, U+59d1, U+5c51, U+5ef7, U+6284, U+62d7, U+6689, U+673d, U+6a2b, U+6a8e, U+6a9c, U+6d63, U+6dd1, U+70b8, U+7235, U+72db, U+72f8, U+7560, U+7c9b, U+7ce7, U+7e1e, U+80af, U+82eb, U+8463, U+8499, U+85dd, U+86ee, U+8a60, U+8a6e, U+8c79, U+8e87, U+8e8a, U+8f5f, U+9010, U+918d, U+9190, U+965b, U+97fb, U+9ab8, U+9bad, U+9d3b, U+9d5c, U+9dfa, U+9e93;
    }
    /* [66] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.66.woff2) format('woff2');
      unicode-range: U+2020, U+3003, U+3231, U+4e9b, U+4f3d, U+4f47, U+51b6, U+51dc, U+53e1, U+5bc5, U+602f, U+60bc, U+61c9, U+633d, U+637b, U+6492, U+65fa, U+660f, U+66f0, U+6703, U+681e, U+6876, U+6893, U+6912, U+698e, U+6c7d, U+714c, U+7169, U+71d5, U+725f, U+72d7, U+745b, U+74dc, U+75e2, U+7891, U+7897, U+7dcb, U+810a, U+8218, U+8339, U+840e, U+852d, U+8823, U+8a0a, U+9089, U+919c, U+971c, U+9ad9, U+ff4a, U+ff5a;
    }
    /* [67] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.67.woff2) format('woff2');
      unicode-range: U+2466, U+2600, U+4eab, U+4fe3, U+4ff5, U+51a5, U+51f0, U+536f, U+53d4, U+53f1, U+54a5, U+559d, U+55e3, U+58fa, U+5962, U+59ea, U+5c16, U+5cef, U+5d16, U+5f10, U+5fd6, U+6190, U+6216, U+634f, U+63bb, U+66d6, U+6756, U+6bc5, U+6e26, U+727d, U+731f, U+76f2, U+7729, U+7a7f, U+7aff, U+7c9f, U+818f, U+8236, U+82b9, U+8338, U+85aa, U+88b4, U+8b33, U+904d, U+93a7, U+96cc, U+96eb, U+9aed, U+9b8e, U+fa11;
    }
    /* [68] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.68.woff2) format('woff2');
      unicode-range: U+251c, U+2523, U+4e14, U+545f, U+54bd, U+553e, U+55dc, U+56da, U+589c, U+5b55, U+5bb5, U+5ce1, U+5df4, U+5eb6, U+5ec9, U+6191, U+62f7, U+6357, U+64a5, U+6591, U+65bc, U+6897, U+6e1a, U+7063, U+711a, U+721b, U+722c, U+75b9, U+75d5, U+75fa, U+7766, U+7aae, U+7b48, U+7b8b, U+7d21, U+7e55, U+7f75, U+842c, U+8910, U+8a63, U+8b39, U+8b5a, U+8cdc, U+8d74, U+907d, U+91e7, U+9306, U+96bc, U+98f4, U+9ac4;
    }
    /* [69] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.69.woff2) format('woff2');
      unicode-range: U+2003, U+2312, U+266c, U+4f86, U+51ea, U+5243, U+5256, U+541f, U+5841, U+59dc, U+5df3, U+601c, U+60e7, U+632b, U+638c, U+64ad, U+6881, U+697c, U+69cd, U+6c50, U+6d2a, U+6fc1, U+7027, U+7058, U+70f9, U+714e, U+7345, U+751a, U+760d, U+764c, U+77db, U+7d79, U+7e8f, U+80ce, U+814e, U+81fc, U+8247, U+8278, U+85a9, U+8a03, U+90ed, U+9784, U+9801, U+984e, U+99b3, U+9bc9, U+9bdb, U+9be8, U+9e78, U+ff6b;
    }
    /* [70] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.70.woff2) format('woff2');
      unicode-range: U+266b, U+3006, U+5176, U+5197, U+51a8, U+51c6, U+52f2, U+5614, U+5875, U+5a2f, U+5b54, U+5ce0, U+5dba, U+5deb, U+5e63, U+5f59, U+5fcc, U+6068, U+6367, U+68b6, U+6a0b, U+6b64, U+6e15, U+6eba, U+7272, U+72a0, U+7947, U+7985, U+79e6, U+79e9, U+7a3d, U+7a9f, U+7aaf, U+7b95, U+7f60, U+7f9e, U+7fe0, U+8098, U+80ba, U+8106, U+82d4, U+831c, U+87f9, U+8a1f, U+8acf, U+90c1, U+920d, U+9756, U+fe43, U+ff94;
    }
    /* [71] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.71.woff2) format('woff2');
      unicode-range: U+af, U+2465, U+2517, U+33a1, U+4f10, U+50c5, U+51b4, U+5384, U+5606, U+5bb0, U+5cac, U+5ee3, U+618e, U+61f2, U+62c9, U+66ab, U+66f9, U+6816, U+6960, U+6b3e, U+6f20, U+7078, U+72d0, U+73ed, U+7ad9, U+7b1b, U+7be4, U+7d62, U+7f51, U+80b4, U+80f4, U+8154, U+85fb, U+865c, U+8702, U+895f, U+8aed, U+8b90, U+8ced, U+8fbf, U+91d8, U+9418, U+9583, U+9591, U+9813, U+982c, U+9bd6, U+ff46, U+ff7f, U+ff88;
    }
    /* [72] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.72.woff2) format('woff2');
      unicode-range: U+4e91, U+508d, U+50e7, U+514e, U+51f6, U+5446, U+5504, U+584a, U+59a8, U+59d3, U+5a46, U+5ac9, U+6020, U+60a6, U+6148, U+621a, U+6234, U+64c1, U+6523, U+675c, U+67d1, U+6953, U+6ccc, U+6df5, U+6e13, U+6f06, U+723a, U+7325, U+74e6, U+758e, U+75ab, U+75d9, U+7a40, U+8096, U+82fa, U+8587, U+8594, U+8a6b, U+8ab9, U+8b17, U+8b83, U+937c, U+963b, U+9673, U+96db, U+9ce9, U+9f4b, U+ff67, U+ff82, U+ff93;
    }
    /* [73] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.73.woff2) format('woff2');
      unicode-range: U+221e, U+2514, U+51f9, U+5270, U+5449, U+5824, U+59a5, U+5a29, U+5d07, U+5e16, U+60e3, U+614c, U+6276, U+643e, U+64ab, U+6562, U+6681, U+670b, U+6734, U+67af, U+6a3d, U+6b05, U+6dc0, U+6e4a, U+7259, U+732a, U+7409, U+78a7, U+7a6b, U+8015, U+809b, U+817a, U+830e, U+837b, U+85ab, U+8a23, U+8a93, U+8b00, U+8b19, U+8b21, U+8cbf, U+8fb0, U+901d, U+91b8, U+9320, U+932c, U+9688, U+96f6, U+9df2, U+ff6a;
    }
    /* [74] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.74.woff2) format('woff2');
      unicode-range: U+2002, U+2025, U+4f8d, U+51e1, U+51f8, U+5507, U+5598, U+58f1, U+5983, U+59ac, U+5c3c, U+5de7, U+5e7d, U+5eca, U+5f61, U+606d, U+60f9, U+636e, U+64ec, U+67da, U+67ff, U+6813, U+68f2, U+693f, U+6b6a, U+6bbb, U+6ef4, U+7092, U+717d, U+7261, U+73c8, U+7432, U+7483, U+76fe, U+7709, U+78d0, U+81a3, U+81b3, U+82af, U+8305, U+8309, U+8870, U+88fe, U+8cd1, U+8d66, U+906e, U+971e, U+9812, U+ff79, U+ff90;
    }
    /* [75] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.75.woff2) format('woff2');
      unicode-range: U+2464, U+2501, U+2640, U+2642, U+339d, U+4f0e, U+5091, U+50b5, U+5132, U+51cc, U+558b, U+55aa, U+585e, U+5bee, U+5dfe, U+60b6, U+62b9, U+6349, U+6566, U+6590, U+6842, U+689d, U+6a58, U+6c70, U+6ff1, U+7815, U+7881, U+7aaa, U+7bc7, U+7def, U+7fa8, U+8017, U+8036, U+8061, U+821f, U+8429, U+8ce0, U+8e74, U+9019, U+90ca, U+9162, U+932f, U+93ae, U+9644, U+990c, U+9cf3, U+ff56, U+ff6e, U+ff7e, U+ff85;
    }
    /* [76] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.76.woff2) format('woff2');
      unicode-range: U+2266-2267, U+4f2f, U+5208, U+5451, U+546a, U+5589, U+576a, U+5815, U+5a9a, U+5b9b, U+5c3a, U+5efb, U+5faa, U+6109, U+6643, U+6652, U+695a, U+69fd, U+6b86, U+6bb4, U+6daf, U+7089, U+70cf, U+7a00, U+7a4f, U+7b39, U+7d33, U+80e1, U+828b, U+82a6, U+86cd, U+8c8c, U+8cca, U+8df3, U+9077, U+9175, U+91dc, U+925b, U+9262, U+9271, U+92ed, U+9855, U+9905, U+9d28, U+ff3f, U+ff58, U+ff68, U+ff6d, U+ff9c;
    }
    /* [77] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.77.woff2) format('woff2');
      unicode-range: U+2207, U+25ef, U+309c, U+4e4f, U+5146, U+51dd, U+5351, U+540a, U+5629, U+5eb5, U+5f04, U+5f13, U+60dc, U+6212, U+63b4, U+642c, U+6627, U+66a6, U+66c7, U+66fd, U+674e, U+6b96, U+6c4e, U+6df3, U+6e67, U+6f84, U+72fc, U+733f, U+7c97, U+7db1, U+7e4d, U+816b, U+82d1, U+84cb, U+854e, U+8607, U+86c7, U+871c, U+8776, U+8a89, U+8fc4, U+91a4, U+9285, U+9685, U+9903, U+9b31, U+9f13, U+ff42, U+ff74, U+ff91;
    }
    /* [78] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.78.woff2) format('woff2');
      unicode-range: U+4e32, U+51db, U+53a8, U+53ea, U+5609, U+5674, U+5a92, U+5e7e, U+6115, U+611a, U+62cc, U+62ed, U+63c9, U+64b9, U+64e6, U+65cb, U+6606, U+6731, U+683d, U+6afb, U+7460, U+771e, U+78ef, U+7b26, U+7b51, U+7cde, U+7d10, U+7d2f, U+7d46, U+80de, U+819c, U+84b2, U+85cd, U+865a, U+8ecc, U+9022, U+90b8, U+9192, U+9675, U+96b7, U+99ff, U+ff44, U+ff55, U+ff6c, U+ff73, U+ff75, U+ff86, U+ff8d, U+ff92, U+ffe3;
    }
    /* [79] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.79.woff2) format('woff2');
      unicode-range: U+25b3, U+30f5, U+4eae, U+4f46, U+4f51, U+5203, U+52ff, U+55a7, U+564c, U+565b, U+57f9, U+5805, U+5b64, U+5e06, U+5f70, U+5f90, U+60e8, U+6182, U+62f3, U+62fe, U+63aa, U+64a4, U+65d7, U+673a, U+6851, U+68cb, U+68df, U+6d1e, U+6e58, U+6e9d, U+77b3, U+7832, U+7c3f, U+7db4, U+7f70, U+80aa, U+80c6, U+8105, U+819d, U+8276, U+8679, U+8986, U+8c9d, U+8fc5, U+916c, U+9665, U+9699, U+96c0, U+9a19, U+ff8b;
    }
    /* [80] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.80.woff2) format('woff2');
      unicode-range: U+2463, U+25a1, U+4ef0, U+5076, U+5098, U+51fd, U+5302, U+5448, U+54c9, U+570b, U+583a, U+5893, U+58a8, U+58ee, U+5949, U+5bdb, U+5f26, U+5f81, U+6052, U+6170, U+61c7, U+631f, U+635c, U+664b, U+69fb, U+6f01, U+7070, U+722a, U+745e, U+755c, U+76c6, U+78c1, U+79e4, U+7bb8, U+7d0b, U+81a8, U+82d7, U+8b5c, U+8f14, U+8fb1, U+8fbb, U+9283, U+9298, U+9a30, U+ff03, U+ff50, U+ff59, U+ff7b, U+ff8e-ff8f;
    }
    /* [81] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.81.woff2) format('woff2');
      unicode-range: U+2010, U+2502, U+25b6, U+4f3a, U+514b, U+5265, U+52c3, U+5339, U+53ec, U+54c0, U+55b0, U+5854, U+5b8f, U+5cb3, U+5e84, U+60da, U+6247, U+6249, U+628a, U+62cd, U+65ac, U+6838, U+690e, U+6cf0, U+6f02, U+6f2c, U+6f70, U+708a, U+7434, U+75be, U+77ef, U+7c60, U+7c98, U+7d1b, U+7e2b, U+80a5, U+81e3, U+820c, U+8210, U+8475, U+862d, U+8650, U+8997, U+906d, U+91c8, U+9700, U+9727, U+9df9, U+ff3a, U+ff9a;
    }
    /* [82] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.82.woff2) format('woff2');
      unicode-range: U+2103, U+5049, U+52b1, U+5320, U+5553, U+572d, U+58c7, U+5b5d, U+5bc2, U+5de3, U+5e61, U+5f80, U+61a9, U+67d0, U+67f4, U+6c88, U+6ca1, U+6ce5, U+6d78, U+6e9c, U+6f54, U+731b, U+73b2, U+74a7, U+74f6, U+75e9, U+7b20, U+7c8b, U+7f72, U+809d, U+8108, U+82b3, U+82bd, U+84b8, U+84c4, U+88c2, U+8ae6, U+8ef8, U+902e, U+9065, U+9326, U+935b, U+938c, U+9676, U+9694, U+96f7, U+9ed9, U+ff48, U+ff4c, U+ff81;
    }
    /* [83] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.83.woff2) format('woff2');
      unicode-range: U+2500, U+3008-3009, U+4ead, U+4f0f, U+4fca, U+53eb, U+543e, U+57a2, U+5cf0, U+5e8f, U+5fe0, U+61b2, U+62d8, U+6442, U+64b2, U+6589, U+659c, U+67f1, U+68c4, U+6cb8, U+6d12, U+6de1, U+6fe1, U+70c8, U+723d, U+73e0, U+7656, U+773a, U+7948, U+7b87, U+7c92, U+7d3a, U+7e1b, U+7e4a, U+819a, U+8358, U+83c5, U+84bc, U+864e, U+8912, U+8c9e, U+8d05, U+92fc, U+9396, U+98fd, U+99d2, U+ff64, U+ff7a, U+ff83;
    }
    /* [84] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.84.woff2) format('woff2');
      unicode-range: U+3014-3015, U+4e3c, U+5036, U+5075, U+533f, U+53e9, U+5531, U+5642, U+5984, U+59e6, U+5a01, U+5b6b, U+5c0b, U+5f25, U+6069, U+60a0, U+614e, U+62b5, U+62d2-62d3, U+6597, U+660c, U+674f, U+67cf, U+6841, U+6905, U+6cf3, U+6d32, U+6d69, U+6f64, U+716e, U+7761, U+7b52, U+7be0, U+7dbf, U+7de9, U+7f36, U+81d3, U+8302, U+8389, U+846c, U+84ee, U+8a69, U+9038, U+9d8f, U+ff47, U+ff4b, U+ff76, U+ff9b;
    }
    /* [85] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.85.woff2) format('woff2');
      unicode-range: U+25c7, U+3007, U+504f, U+507d, U+51a0, U+52a3, U+5410, U+5510, U+559a, U+5782, U+582a, U+5c0a, U+5c3f, U+5c48, U+5f6b, U+6176, U+622f, U+6279, U+62bd, U+62dd, U+65ed, U+67b6, U+6817, U+6850, U+6d6a, U+6deb, U+6ea2, U+6edd, U+6f5c, U+72e9, U+73a9, U+7573, U+76bf, U+7950, U+7956, U+7f8a, U+7ffc, U+80a2, U+80c3, U+83ca, U+8a02, U+8a13, U+8df5, U+9375, U+983b, U+99b4, U+ff4e, U+ff71, U+ff89, U+ff97;
    }
    /* [86] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.86.woff2) format('woff2');
      unicode-range: U+24, U+2022, U+2212, U+221f, U+2665, U+4ecf, U+5100, U+51cd, U+52d8, U+5378, U+53f6, U+574a, U+5982, U+5996, U+5c1a, U+5e1d, U+5f84, U+609f, U+61a7, U+61f8, U+6398, U+63ee, U+6676, U+6691, U+6eb6, U+7126, U+71e5, U+7687, U+7965, U+7d17, U+80a1, U+8107, U+8266, U+85a6, U+8987, U+8ca2, U+8cab, U+8e0a, U+9042, U+95c7, U+9810, U+9867, U+98fc, U+ff52-ff54, U+ff61, U+ff77, U+ff98-ff99;
    }
    /* [87] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.87.woff2) format('woff2');
      unicode-range: U+b0, U+226a, U+2462, U+4e39, U+4fc3, U+4fd7, U+50be, U+50da, U+5200, U+5211, U+54f2, U+5618, U+596a, U+5b22, U+5bb4, U+5d50, U+60a3, U+63fa, U+658e, U+65e8, U+6669, U+6795, U+679d, U+67a0, U+6b3a, U+6e09, U+757f, U+7cd6, U+7dbe, U+7ffb, U+83cc, U+83f1, U+840c, U+845b, U+8846, U+8972, U+8a34, U+8a50, U+8a87, U+8edf, U+8ff0, U+90a6, U+9154, U+95a3, U+9663, U+9686, U+96c7, U+ff3c, U+ff7c, U+ff8a;
    }
    /* [88] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.88.woff2) format('woff2');
      unicode-range: U+25bd, U+4e59, U+4ec1, U+4ff3, U+515a, U+518a, U+525b, U+5375, U+552f, U+57a3, U+5b9c, U+5c3d, U+5e3d, U+5e7b, U+5f0a, U+6094, U+6458, U+654f, U+67f3, U+6b8a, U+6bd2, U+6c37, U+6ce1, U+6e56, U+6e7f, U+6ed1, U+6ede, U+6f0f, U+70ad, U+7267, U+7363, U+786c, U+7a42, U+7db2, U+7f85, U+8178, U+829d, U+8896, U+8c5a, U+8cb0, U+8ce2, U+8ed2, U+9047, U+9177, U+970a, U+9ea6, U+ff1b, U+ff31, U+ff39, U+ff80;
    }
    /* [89] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.89.woff2) format('woff2');
      unicode-range: U+a5, U+4e80, U+4f34, U+4f73, U+4f75, U+511f, U+5192, U+52aa, U+53c8, U+570f, U+57cb, U+596e, U+5d8b, U+5f66, U+5fd9, U+62db, U+62f6, U+6328, U+633f, U+63a7, U+6469, U+6bbf, U+6c41, U+6c57, U+6d44, U+6dbc, U+706f, U+72c2, U+72ed, U+7551, U+75f4, U+7949, U+7e26, U+7fd4, U+8150, U+8af8, U+8b0e, U+8b72, U+8ca7, U+934b, U+9a0e, U+9a12, U+9b42, U+ff41, U+ff43, U+ff45, U+ff49, U+ff4f, U+ff62-ff63;
    }
    /* [90] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.90.woff2) format('woff2');
      unicode-range: U+4e18, U+4fb5, U+5104, U+52c7, U+5353, U+5374, U+53e5, U+587e, U+594f, U+5a20, U+5de1, U+5f18, U+5fcd, U+6291, U+62ab, U+6355, U+6392, U+63da, U+63e1, U+656c, U+6687, U+68b0-68b1, U+68d2, U+68da, U+6b27, U+6cbc, U+7159, U+7344, U+73cd, U+76df, U+790e, U+7cf8, U+8102, U+88c1, U+8aa0, U+8e0f, U+9178, U+92ad, U+9670, U+96c5, U+9cf4, U+9db4, U+ff3e, U+ff6f, U+ff72, U+ff78, U+ff7d, U+ff84, U+ff8c;
    }
    /* [91] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.91.woff2) format('woff2');
      unicode-range: U+60, U+2200, U+226b, U+2461, U+517c, U+526f, U+5800, U+5b97, U+5bf8, U+5c01, U+5d29, U+5e4c, U+5e81, U+6065, U+61d0, U+667a, U+6696, U+6843, U+6c99, U+6d99, U+6ec5, U+6f22, U+6f6e, U+6fa4, U+6fef, U+71c3, U+72d9, U+7384, U+78e8, U+7a1a, U+7a32, U+7a3c, U+7adc, U+7ca7, U+7d2b, U+7dad, U+7e4b, U+80a9, U+8170, U+81ed, U+820e, U+8a17, U+8afe, U+90aa, U+914e, U+963f, U+99c4, U+9eba, U+9f3b, U+ff38;
    }
    /* [92] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.92.woff2) format('woff2');
      unicode-range: U+2460, U+4e5f, U+4e7e, U+4ed9, U+501f, U+502b, U+5968, U+5974, U+5ac1, U+5b99, U+5ba3, U+5be7, U+5be9, U+5c64, U+5cb8, U+5ec3, U+5f1f, U+616e, U+6297, U+62e0, U+62ec, U+6368, U+642d, U+65e6, U+6717, U+676f, U+6b04, U+732e, U+7652, U+76ca, U+76d7, U+7802, U+7e70, U+7f6a, U+8133, U+81e8, U+866b, U+878d, U+88f8, U+8a5e, U+8cdb, U+8d08, U+907a, U+90e1, U+96f2, U+9f8d, U+ff35, U+ff37, U+ff40, U+ff9d;
    }
    /* [93] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.93.woff2) format('woff2');
      unicode-range: U+21d2, U+25ce, U+300a-300b, U+4e89, U+4e9c, U+4ea1, U+5263, U+53cc, U+5426, U+5869, U+5947, U+598a, U+5999, U+5e55, U+5e72, U+5e79, U+5fae, U+5fb9, U+602a, U+6163, U+624d, U+6749, U+6c5a, U+6cbf, U+6d45, U+6dfb, U+6e7e, U+708e, U+725b, U+7763, U+79c0, U+7bc4, U+7c89, U+7e01, U+7e2e, U+8010, U+8033, U+8c6a, U+8cc3, U+8f1d, U+8f9b, U+8fb2, U+907f, U+90f7, U+9707, U+9818, U+9b3c, U+ff0a, U+ff4d;
    }
    /* [94] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.94.woff2) format('woff2');
      unicode-range: U+2015, U+2190, U+4e43, U+5019, U+5247, U+52e7, U+5438, U+54b2, U+55ab, U+57f7, U+5bd2, U+5e8a, U+5ef6, U+6016, U+60b2, U+6162, U+6319, U+6551, U+6607, U+66b4, U+675f, U+67d4, U+6b20, U+6b53, U+6ce3, U+719f, U+75b2, U+770b, U+7720, U+77ac, U+79d2, U+7af9, U+7d05, U+7dca, U+8056, U+80f8, U+81f3, U+8352, U+885d, U+8a70, U+8aa4, U+8cbc, U+900f, U+9084, U+91e3, U+9451, U+96c4, U+99c6, U+9ad4, U+ff70;
    }
    /* [95] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.95.woff2) format('woff2');
      unicode-range: U+2193, U+25b2, U+4e4b, U+516d, U+51c4, U+529f, U+52c9, U+5360, U+5442, U+5857, U+5915, U+59eb, U+5a9b, U+5c3b, U+6012, U+61b6, U+62b1, U+6311, U+6577, U+65e2, U+65ec, U+6613, U+6790, U+6cb9, U+7372, U+76ae, U+7d5e, U+7fcc, U+88ab, U+88d5, U+8caf, U+8ddd, U+8ecd, U+8f38, U+8f9e, U+8feb, U+9063, U+90f5, U+93e1, U+968a, U+968f, U+98fe, U+9ec4, U+ff1d, U+ff27, U+ff2a, U+ff36, U+ff3b, U+ff3d, U+ffe5;
    }
    /* [96] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.96.woff2) format('woff2');
      unicode-range: U+4e03, U+4f38, U+50b7, U+5264, U+5348, U+5371, U+585a, U+58ca, U+5951, U+59b9, U+59d4, U+5b98, U+5f8b, U+6388, U+64cd, U+65e7, U+6803, U+6b6f, U+6d66, U+6e0b, U+6ecb, U+6fc3, U+72ac, U+773c, U+77e2, U+7968, U+7a74, U+7dba, U+7dd1, U+7e3e, U+808c, U+811a, U+8179, U+8239, U+8584, U+8a0e, U+8a72, U+8b66, U+8c46, U+8f29, U+90a3, U+9234, U+96f0, U+9769, U+9774, U+9aa8, U+ff26, U+ff28, U+ff9e-ff9f;
    }
    /* [97] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.97.woff2) format('woff2');
      unicode-range: U+7e, U+b4, U+25c6, U+2661, U+4e92, U+4eee, U+4ffa, U+5144, U+5237, U+5287, U+52b4, U+58c1, U+5bff, U+5c04, U+5c06, U+5e95, U+5f31, U+5f93, U+63c3, U+640d, U+6557, U+6614, U+662f, U+67d3, U+690d, U+6bba, U+6e6f, U+72af, U+732b, U+7518, U+7ae0, U+7ae5, U+7af6, U+822a, U+89e6, U+8a3a, U+8a98, U+8cb8, U+8de1, U+8e8d, U+95d8, U+961c, U+96a3, U+96ea, U+9bae, U+ff20, U+ff22, U+ff29, U+ff2b-ff2c;
    }
    /* [98] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.98.woff2) format('woff2');
      unicode-range: U+25cb, U+4e71, U+4f59, U+50d5, U+520a, U+5217, U+5230, U+523a-523b, U+541b, U+5439, U+5747, U+59c9, U+5bdf, U+5c31, U+5de8, U+5e7c, U+5f69, U+6050, U+60d1, U+63cf, U+663c, U+67c4, U+6885, U+6c38, U+6d6e, U+6db2, U+6df7, U+6e2c, U+6f5f, U+7532, U+76e3-76e4, U+7701, U+793c, U+79f0, U+7a93, U+7d00, U+7de0, U+7e54, U+8328, U+8840, U+969c, U+96e8, U+9811, U+9aea, U+9b5a, U+ff24, U+ff2e, U+ff57;
    }
    /* [99] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.99.woff2) format('woff2');
      unicode-range: U+2191, U+505c, U+52e4, U+5305, U+535a, U+56e0, U+59bb, U+5acc, U+5b09, U+5b87, U+5c90, U+5df1, U+5e2d, U+5e33, U+5f3e, U+6298, U+6383, U+653b, U+6697, U+6804, U+6a39, U+6cca, U+6e90, U+6f2b, U+702c, U+7206, U+7236, U+7559, U+7565, U+7591, U+75c7, U+75db, U+7b4b, U+7bb1, U+7d99, U+7fbd, U+8131, U+885b, U+8b1d, U+8ff7, U+9003, U+9045, U+96a0, U+9732, U+990a, U+99d0, U+9e97, U+9f62, U+ff25, U+ff2d;
    }
    /* [100] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.100.woff2) format('woff2');
      unicode-range: U+4e08, U+4f9d, U+5012, U+514d, U+51b7, U+5275, U+53ca, U+53f8, U+5584, U+57fc, U+5b9d, U+5bfa, U+5c3e, U+5f01, U+5fb4, U+5fd7, U+606f, U+62e1, U+6563, U+6674, U+6cb3, U+6d3e, U+6d74, U+6e1b, U+6e2f, U+718a, U+7247, U+79d8, U+7d14, U+7d66, U+7d71, U+7df4, U+7e41, U+80cc, U+8155, U+83d3, U+8a95, U+8ab2, U+8ad6, U+8ca1, U+9000, U+9006, U+9678, U+97d3, U+9808, U+98ef, U+9a5a, U+9b45, U+ff23, U+ff30;
    }
    /* [101] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.101.woff2) format('woff2');
      unicode-range: U+25bc, U+3012, U+4ef2, U+4f0a, U+516b, U+5373, U+539a, U+53b3, U+559c, U+56f0, U+5727, U+5742, U+5965, U+59ff, U+5bc6, U+5dfb, U+5e45, U+5ead, U+5fb3, U+6211, U+6253, U+639b, U+63a8, U+6545, U+6575, U+6628, U+672d, U+68a8, U+6bdb, U+6d25, U+707d, U+767e, U+7834, U+7b46, U+7bc9, U+8074, U+82e6, U+8349, U+8a2a, U+8d70, U+8da3, U+8fce, U+91cc, U+967d, U+97ff, U+9996, U+ff1c, U+ff2f, U+ff32, U+ff34;
    }
    /* [102] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.102.woff2) format('woff2');
      unicode-range: U+3d, U+5e, U+25cf, U+4e0e, U+4e5d, U+4e73, U+4e94, U+4f3c, U+5009, U+5145, U+51ac, U+5238, U+524a, U+53f3, U+547c, U+5802, U+5922, U+5a66, U+5c0e, U+5de6, U+5fd8, U+5feb, U+6797, U+685c, U+6b7b, U+6c5f-6c60, U+6cc9, U+6ce2, U+6d17, U+6e21, U+7167, U+7642, U+76db, U+8001, U+821e, U+8857, U+89d2, U+8b1b, U+8b70, U+8cb4, U+8cde, U+8f03, U+8f2a, U+968e, U+9b54, U+9e7f, U+9ebb, U+ff05, U+ff33;
    }
    /* [103] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.103.woff2) format('woff2');
      unicode-range: U+500d, U+5074, U+50cd, U+5175, U+52e2, U+5352, U+5354, U+53f2, U+5409, U+56fa, U+5a18, U+5b88, U+5bdd, U+5ca9, U+5f92, U+5fa9, U+60a9, U+623f, U+6483, U+653f, U+666f, U+66ae, U+66f2, U+6a21, U+6b66, U+6bcd, U+6d5c, U+796d, U+7a4d, U+7aef, U+7b56, U+7b97, U+7c4d, U+7e04, U+7fa9, U+8377, U+83dc, U+83ef, U+8535, U+8863, U+88cf, U+88dc, U+8907, U+8acb, U+90ce, U+91dd, U+ff0b, U+ff0d, U+ff19, U+ff65;
    }
    /* [104] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.104.woff2) format('woff2');
      unicode-range: U+4e01, U+4e21, U+4e38, U+52a9, U+547d, U+592e, U+5931, U+5b63, U+5c40, U+5dde, U+5e78, U+5efa, U+5fa1, U+604b, U+6075, U+62c5, U+632f, U+6a19, U+6c0f, U+6c11, U+6c96, U+6e05, U+70ba, U+71b1, U+7387, U+7403, U+75c5, U+77ed, U+795d, U+7b54, U+7cbe, U+7d19, U+7fa4, U+8089, U+81f4, U+8208, U+8336, U+8457, U+8a33, U+8c4a, U+8ca0, U+8ca8, U+8cc0, U+9014, U+964d, U+9803, U+983c, U+98db, U+ff17, U+ff21;
    }
    /* [105] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.105.woff2) format('woff2');
      unicode-range: U+25, U+25a0, U+4e26, U+4f4e, U+5341, U+56f2, U+5bbf, U+5c45, U+5c55, U+5c5e, U+5dee, U+5e9c, U+5f7c, U+6255, U+627f, U+62bc, U+65cf, U+661f, U+666e, U+66dc, U+67fb, U+6975, U+6a4b, U+6b32, U+6df1, U+6e29, U+6fc0, U+738b, U+7686, U+7a76, U+7a81, U+7c73, U+7d75, U+7dd2, U+82e5, U+82f1, U+85ac, U+888b, U+899a, U+8a31, U+8a8c, U+8ab0, U+8b58, U+904a, U+9060, U+9280, U+95b2, U+984d, U+9ce5, U+ff18;
    }
    /* [106] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.106.woff2) format('woff2');
      unicode-range: U+30f6, U+50ac, U+5178, U+51e6, U+5224, U+52dd, U+5883, U+5897, U+590f, U+5a5a, U+5bb3, U+5c65, U+5e03, U+5e2b, U+5e30, U+5eb7, U+6271, U+63f4, U+64ae, U+6574, U+672b, U+679a, U+6a29-6a2a, U+6ca2, U+6cc1, U+6d0b, U+713c, U+74b0, U+7981, U+7a0b, U+7bc0, U+7d1a, U+7d61, U+7fd2, U+822c, U+8996, U+89aa, U+8cac, U+8cbb, U+8d77, U+8def, U+9020, U+9152, U+9244, U+9662, U+967a, U+96e3, U+9759, U+ff16;
    }
    /* [107] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.107.woff2) format('woff2');
      unicode-range: U+23, U+3c, U+2192, U+4e45, U+4efb, U+4f50, U+4f8b, U+4fc2, U+5024, U+5150, U+5272, U+5370, U+53bb, U+542b, U+56db, U+56e3, U+57ce, U+5bc4, U+5bcc, U+5f71, U+60aa, U+6238, U+6280, U+629c, U+6539, U+66ff, U+670d, U+677e-677f, U+6839, U+69cb, U+6b4c, U+6bb5, U+6e96, U+6f14, U+72ec, U+7389, U+7814, U+79cb, U+79d1, U+79fb, U+7a0e, U+7d0d, U+85e4, U+8d64, U+9632, U+96e2, U+9805, U+99ac, U+ff1e;
    }
    /* [108] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.108.woff2) format('woff2');
      unicode-range: U+2605-2606, U+301c, U+4e57, U+4fee, U+5065, U+52df, U+533b, U+5357, U+57df, U+58eb, U+58f0, U+591c, U+592a-592b, U+5948, U+5b85, U+5d0e, U+5ea7, U+5ff5, U+6025, U+63a1, U+63a5, U+63db, U+643a, U+65bd, U+671d, U+68ee, U+6982, U+6b73, U+6bd4, U+6d88, U+7570, U+7b11, U+7d76, U+8077, U+8217, U+8c37, U+8c61, U+8cc7, U+8d85, U+901f, U+962a, U+9802, U+9806, U+9854, U+98f2, U+9928, U+99c5, U+9ed2;
    }
    /* [109] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.109.woff2) format('woff2');
      unicode-range: U+266a, U+4f11, U+533a, U+5343, U+534a, U+53cd, U+5404, U+56f3, U+5b57-5b58, U+5bae, U+5c4a, U+5e0c, U+5e2f, U+5eab, U+5f35, U+5f79, U+614b, U+6226, U+629e, U+65c5, U+6625, U+6751, U+6821, U+6b69, U+6b8b, U+6bce, U+6c42, U+706b, U+7c21, U+7cfb, U+805e, U+80b2, U+82b8, U+843d, U+8853, U+88c5, U+8a3c, U+8a66, U+8d8a, U+8fba, U+9069, U+91cf, U+9752, U+975e, U+9999, U+ff0f-ff10, U+ff14-ff15;
    }
    /* [110] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.110.woff2) format('woff2');
      unicode-range: U+40, U+4e86, U+4e95, U+4f01, U+4f1d, U+4fbf, U+5099, U+5171, U+5177, U+53cb, U+53ce, U+53f0, U+5668, U+5712, U+5ba4, U+5ca1, U+5f85, U+60f3, U+653e, U+65ad, U+65e9, U+6620, U+6750, U+6761, U+6b62, U+6b74, U+6e08, U+6e80, U+7248, U+7531, U+7533, U+753a, U+77f3, U+798f, U+7f6e, U+8449, U+88fd, U+89b3, U+8a55, U+8ac7, U+8b77, U+8db3, U+8efd, U+8fd4, U+9031-9032, U+9580, U+9589, U+96d1, U+985e;
    }
    /* [111] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.111.woff2) format('woff2');
      unicode-range: U+2b, U+d7, U+300e-300f, U+4e07, U+4e8c, U+512a, U+5149, U+518d, U+5236, U+52b9, U+52d9, U+5468, U+578b, U+57fa, U+5b8c, U+5ba2, U+5c02, U+5de5, U+5f37, U+5f62, U+623b, U+63d0, U+652f, U+672a, U+6848, U+6d41, U+7136, U+7537, U+754c, U+76f4, U+79c1, U+7ba1, U+7d44, U+7d4c, U+7dcf, U+7dda, U+7de8, U+82b1, U+897f, U+8ca9, U+8cfc, U+904e, U+9664, U+982d, U+9858, U+98a8, U+9a13, U+ff13, U+ff5c;
    }
    /* [112] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.112.woff2) format('woff2');
      unicode-range: U+4e16, U+4e3b, U+4ea4, U+4ee4, U+4f4d, U+4f4f, U+4f55, U+4f9b, U+5317, U+5358, U+53c2, U+53e4, U+548c, U+571f, U+59cb, U+5cf6, U+5e38, U+63a2, U+63b2, U+6559, U+662d, U+679c, U+6c7a, U+72b6, U+7523, U+767d, U+770c, U+7a2e, U+7a3f, U+7a7a, U+7b2c, U+7b49, U+7d20, U+7d42, U+8003, U+8272, U+8a08, U+8aac, U+8cb7, U+8eab, U+8ee2, U+9054-9055, U+90fd, U+914d, U+91cd, U+969b, U+97f3, U+984c, U+ff06;
    }
    /* [113] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.113.woff2) format('woff2');
      unicode-range: U+26, U+5f, U+2026, U+203b, U+4e09, U+4eac, U+4ed5, U+4fa1, U+5143, U+5199, U+5207, U+539f, U+53e3, U+53f7, U+5411, U+5473, U+5546, U+55b6, U+5929, U+597d, U+5bb9, U+5c11, U+5c4b, U+5ddd, U+5f97, U+5fc5, U+6295, U+6301, U+6307, U+671b, U+76f8, U+78ba, U+795e, U+7d30, U+7d39, U+7d9a, U+89e3, U+8a00, U+8a73, U+8a8d, U+8a9e, U+8aad, U+8abf, U+8cea, U+8eca, U+8ffd, U+904b, U+9650, U+ff11-ff12;
    }
    /* [114] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.114.woff2) format('woff2');
      unicode-range: U+3e, U+3005, U+4e0d, U+4e88, U+4ecb, U+4ee3, U+4ef6, U+4fdd, U+4fe1, U+500b, U+50cf, U+5186, U+5316, U+53d7, U+540c, U+544a, U+54e1, U+5728, U+58f2, U+5973, U+5b89, U+5c71, U+5e02, U+5e97, U+5f15, U+5fc3, U+5fdc, U+601d, U+611b, U+611f, U+671f, U+6728, U+6765, U+683c, U+6b21, U+6ce8, U+6d3b, U+6d77, U+7530, U+7740, U+7acb, U+7d50, U+826f, U+8f09, U+8fbc, U+9001, U+9053, U+91ce, U+9762, U+98df;
    }
    /* [115] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.115.woff2) format('woff2');
      unicode-range: U+7c, U+3080, U+4ee5, U+5148, U+516c, U+521d, U+5225, U+529b, U+52a0, U+53ef, U+56de, U+56fd, U+5909, U+591a, U+5b66, U+5b9f, U+5bb6, U+5bfe, U+5e73, U+5e83, U+5ea6, U+5f53, U+6027, U+610f, U+6210, U+6240, U+660e, U+66f4, U+66f8, U+6709, U+6771, U+697d, U+69d8, U+6a5f, U+6c34, U+6cbb, U+73fe, U+756a, U+7684, U+771f, U+793a, U+7f8e, U+898f, U+8a2d, U+8a71, U+8fd1, U+9078, U+9577, U+96fb, U+ff5e;
    }
    /* [116] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.116.woff2) format('woff2');
      unicode-range: U+a9, U+3010-3011, U+30e2, U+4e0b, U+4eca, U+4ed6, U+4ed8, U+4f53, U+4f5c, U+4f7f, U+53d6, U+540d, U+54c1, U+5730, U+5916, U+5b50, U+5c0f, U+5f8c, U+624b, U+6570, U+6587, U+6599, U+691c, U+696d, U+6cd5, U+7269, U+7279, U+7406, U+767a-767b, U+77e5, U+7d04, U+7d22, U+8005, U+80fd, U+81ea, U+8868, U+8981, U+89a7, U+901a, U+9023, U+90e8, U+91d1, U+9332, U+958b, U+96c6, U+9ad8, U+ff1a, U+ff1f;
    }
    /* [117] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.117.woff2) format('woff2');
      unicode-range: U+4e, U+a0, U+3000, U+300c-300d, U+4e00, U+4e0a, U+4e2d, U+4e8b, U+4eba, U+4f1a, U+5165, U+5168, U+5185, U+51fa, U+5206, U+5229, U+524d, U+52d5, U+5408, U+554f, U+5831, U+5834, U+5927, U+5b9a, U+5e74, U+5f0f, U+60c5, U+65b0, U+65b9, U+6642, U+6700, U+672c, U+682a, U+6b63, U+6c17, U+7121, U+751f, U+7528, U+753b, U+76ee, U+793e, U+884c, U+898b, U+8a18, U+9593, U+95a2, U+ff01, U+ff08-ff09;
    }
    /* [118] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.118.woff2) format('woff2');
      unicode-range: U+21-22, U+27-2a, U+2c-3b, U+3f, U+41-4d, U+4f-5d, U+61-7b, U+7d, U+ab, U+ae, U+b2-b3, U+b7, U+bb, U+c9, U+cd, U+d6, U+d8, U+dc, U+e0-e5, U+e7-ed, U+ef, U+f1-f4, U+f6, U+f8, U+fa, U+fc-fd, U+103, U+14d, U+1b0, U+300-301, U+1ebf, U+1ec7, U+2013-2014, U+201c-201d, U+2039-203a, U+203c, U+2048-2049, U+2113, U+2122, U+65e5, U+6708, U+70b9;
    }
    /* [119] */
    @font-face {
      font-family: 'Kosugi Maru';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/kosugimaru/v11/0nksC9PgP_wGh21A2KeqGiTvivz9iUCqJxZJNts-1j0eixkNHiGxxUEEixg.119.woff2) format('woff2');
      unicode-range: U+20, U+2027, U+3001-3002, U+3041-307f, U+3081-308f, U+3091-3093, U+3099-309a, U+309d-309e, U+30a1-30e1, U+30e3-30ed, U+30ef-30f0, U+30f2-30f4, U+30fb-30fe, U+ff0c, U+ff0e;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* [0] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.0.woff2) format('woff2');
      unicode-range: U+25e56, U+25e62, U+25e65, U+25ec2, U+25ed8, U+25ee8, U+25f23, U+25f5c, U+25fd4, U+25fe0, U+25ffb, U+2600c, U+26017, U+26060, U+260ed, U+26222, U+2626a, U+26270, U+26286, U+2634c, U+26402, U+2667e, U+266b0, U+2671d, U+268dd, U+268ea, U+26951, U+2696f, U+26999, U+269dd, U+26a1e, U+26a58, U+26a8c, U+26ab7, U+26aff, U+26c29, U+26c73, U+26c9e, U+26cdd, U+26e40, U+26e65, U+26f94, U+26ff6-26ff8, U+270f4, U+2710d, U+27139, U+273da-273db, U+273fe, U+27410, U+27449, U+27614-27615, U+27631, U+27684, U+27693, U+2770e, U+27723, U+27752, U+278b2, U+27985, U+279b4, U+27a84, U+27bb3, U+27bbe, U+27bc7, U+27c3c, U+27cb8, U+27d73, U+27da0, U+27e10, U+27fb7, U+2808a, U+280bb, U+28277, U+28282, U+282f3, U+283cd, U+2840c, U+28455, U+2856b, U+285c8-285c9, U+286d7, U+286fa, U+28946, U+28949, U+2896b, U+28987-28988, U+289ba-289bb, U+28a1e, U+28a29, U+28a43, U+28a71, U+28a99, U+28acd, U+28add, U+28ae4, U+28bc1, U+28bef, U+28cdd, U+28d10, U+28d71, U+28dfb, U+28e0f, U+28e17, U+28e1f, U+28e36, U+28e89, U+28eeb, U+28ef6, U+28f32, U+28ff8, U+292a0, U+292b1, U+29490, U+295cf, U+2967f, U+296f0, U+29719, U+29750, U+29810, U+298c6, U+29a72, U+29d4b, U+29ddb, U+29e15, U+29e3d, U+29e49, U+29e8a, U+29ec4, U+29edb, U+29ee9, U+29fce, U+29fd7, U+2a01a, U+2a02f, U+2a082, U+2a0f9, U+2a190, U+2a2b2, U+2a38c, U+2a437, U+2a5f1, U+2a602, U+2a61a, U+2a6b2, U+2a9e6, U+2b746, U+2b751, U+2b753, U+2b75a, U+2b75c, U+2b765, U+2b776-2b777, U+2b77c, U+2b782, U+2b789, U+2b78b, U+2b78e, U+2b794, U+2b7ac, U+2b7af, U+2b7bd, U+2b7c9, U+2b7cf, U+2b7d2, U+2b7d8, U+2b7f0, U+2b80d, U+2b817, U+2b81a, U+2f804, U+2f80f, U+2f815, U+2f818, U+2f81a, U+2f822, U+2f828, U+2f82c, U+2f833, U+2f83f, U+2f846, U+2f852, U+2f862, U+2f86d, U+2f873, U+2f877, U+2f884, U+2f899-2f89a, U+2f8a6, U+2f8ac, U+2f8b2, U+2f8b6, U+2f8d3, U+2f8db-2f8dc, U+2f8e1, U+2f8e5, U+2f8ea, U+2f8ed, U+2f8fc, U+2f903, U+2f90b, U+2f90f, U+2f91a, U+2f920-2f921, U+2f945, U+2f947, U+2f96c, U+2f995, U+2f9d0, U+2f9de-2f9df, U+2f9f4;
    }
    /* [1] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.1.woff2) format('woff2');
      unicode-range: U+1f230-1f23a, U+1f240-1f248, U+1f250-1f251, U+2000b, U+20089-2008a, U+200a2, U+200a4, U+200b0, U+200f5, U+20158, U+201a2, U+20213, U+2032b, U+20371, U+20381, U+203f9, U+2044a, U+20509, U+2053f, U+205b1, U+205d6, U+20611, U+20628, U+206ec, U+2074f, U+207c8, U+20807, U+2083a, U+208b9, U+2090e, U+2097c, U+20984, U+2099d, U+20a64, U+20ad3, U+20b1d, U+20b9f, U+20bb7, U+20d45, U+20d58, U+20de1, U+20e64, U+20e6d, U+20e95, U+20f5f, U+21201, U+2123d, U+21255, U+21274, U+2127b, U+212d7, U+212e4, U+212fd, U+2131b, U+21336, U+21344, U+213c4, U+2146d-2146e, U+215d7, U+21647, U+216b4, U+21706, U+21742, U+218bd, U+219c3, U+21a1a, U+21c56, U+21d2d, U+21d45, U+21d62, U+21d78, U+21d92, U+21d9c, U+21da1, U+21db7, U+21de0, U+21e33-21e34, U+21f1e, U+21f76, U+21ffa, U+2217b, U+22218, U+2231e, U+223ad, U+22609, U+226f3, U+2285b, U+228ab, U+2298f, U+22ab8, U+22b46, U+22b4f-22b50, U+22ba6, U+22c1d, U+22c24, U+22de1, U+22e42, U+22feb, U+231b6, U+231c3-231c4, U+231f5, U+23372, U+233cc, U+233d0, U+233d2-233d3, U+233d5, U+233da, U+233df, U+233e4, U+233fe, U+2344a-2344b, U+23451, U+23465, U+234e4, U+2355a, U+23594, U+235c4, U+23638-2363a, U+23647, U+2370c, U+2371c, U+2373f, U+23763-23764, U+237e7, U+237f1, U+237ff, U+23824, U+2383d, U+23a98, U+23c7f, U+23cbe, U+23cfe, U+23d00, U+23d0e, U+23d40, U+23dd3, U+23df9-23dfa, U+23f7e, U+2404b, U+24096, U+24103, U+241c6, U+241fe, U+242ee, U+243bc, U+243d0, U+24629, U+246a5, U+247f1, U+24896, U+248e9, U+24a4d, U+24b56, U+24b6f, U+24c16, U+24d14, U+24e04, U+24e0e, U+24e37, U+24e6a, U+24e8b, U+24ff2, U+2504a, U+25055, U+25122, U+251a9, U+251cd, U+251e5, U+2521e, U+2524c, U+2542e, U+2548e, U+254d9, U+2550e, U+255a7, U+2567f, U+25771, U+257a9, U+257b4, U+25874, U+259c4, U+259cc, U+259d4, U+25ad7, U+25ae3-25ae4, U+25af1, U+25bb2, U+25c4b, U+25c64, U+25da1, U+25e2e;
    }
    /* [2] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.2.woff2) format('woff2');
      unicode-range: U+ffb6-ffbe, U+ffc2-ffc7, U+ffca-ffcf, U+ffd2-ffd7, U+ffda-ffdc, U+ffe0-ffe2, U+ffe4, U+ffe6, U+ffe8-ffee, U+1f100-1f10a, U+1f110-1f12e, U+1f130-1f16b, U+1f170-1f19a, U+1f200-1f202, U+1f210-1f22f;
    }
    /* [3] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.3.woff2) format('woff2');
      unicode-range: U+f9f6-fa0b, U+fa0e-fa10, U+fa12-fa6d, U+fb00-fb04, U+fe10-fe19, U+fe30-fe42, U+fe44-fe52, U+fe54-fe66, U+fe68-fe6b, U+ff02, U+ff04, U+ff07, U+ff51, U+ff5b, U+ff5d, U+ff5f-ff60, U+ff66, U+ff69, U+ff87, U+ffa0-ffb5;
    }
    /* [5] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.5.woff2) format('woff2');
      unicode-range: U+9e16, U+9e19-9e1f, U+9e75, U+9e79-9e7d, U+9e80-9e85, U+9e87-9e88, U+9e8b-9e8c, U+9e8e-9e8f, U+9e91-9e92, U+9e95-9e96, U+9e98, U+9e9b, U+9e9d-9e9e, U+9ea4-9ea5, U+9ea8-9eaa, U+9eac-9eb0, U+9eb3-9eb5, U+9eb8, U+9ebc-9ebf, U+9ec3, U+9ec6, U+9ec8, U+9ecb-9ecd, U+9ecf-9ed1, U+9ed4-9ed5, U+9ed8, U+9edb-9ee0, U+9ee4-9ee5, U+9ee7-9ee8, U+9eec-9ef2, U+9ef4-9ef9, U+9efb-9eff, U+9f02-9f03, U+9f07-9f09, U+9f0e-9f12, U+9f14-9f17, U+9f19-9f1b, U+9f1f-9f22, U+9f26, U+9f2a-9f2c, U+9f2f, U+9f31-9f32, U+9f34, U+9f37, U+9f39-9f3a, U+9f3c-9f3f, U+9f41, U+9f43-9f47, U+9f4a, U+9f4e-9f50, U+9f52-9f58, U+9f5a, U+9f5d-9f61, U+9f63, U+9f66-9f6a, U+9f6c-9f73, U+9f75-9f77, U+9f7a, U+9f7d, U+9f7f, U+9f8f-9f92, U+9f94-9f97, U+9f99, U+9f9c-9fa3, U+9fa5, U+9fb4, U+9fbc-9fc2, U+9fc4, U+9fc6, U+9fcc, U+f900-f915;
    }
    /* [6] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.6.woff2) format('woff2');
      unicode-range: U+9c22-9c2a, U+9c2d-9c32, U+9c35-9c37, U+9c39-9c3a, U+9c3d-9c3e, U+9c41, U+9c43-9c4a, U+9c4e-9c50, U+9c52-9c54, U+9c56, U+9c58, U+9c5a-9c61, U+9c63, U+9c65, U+9c67-9c6b, U+9c6d-9c6e, U+9c70, U+9c72, U+9c75-9c78, U+9c7a-9c7c, U+9ce6-9ce7, U+9ceb-9cec, U+9cf0, U+9cf2, U+9cf6-9cf7, U+9cf9, U+9d02-9d03, U+9d06-9d09, U+9d0b, U+9d0e, U+9d11-9d12, U+9d15, U+9d17-9d18, U+9d1b-9d1f, U+9d23, U+9d26, U+9d2a-9d2c, U+9d2f-9d30, U+9d32-9d34, U+9d3a, U+9d3c-9d3f, U+9d41-9d48, U+9d4a, U+9d50-9d54, U+9d59, U+9d5d-9d65, U+9d69-9d6c, U+9d6f-9d70, U+9d72-9d73, U+9d76-9d77, U+9d7a-9d7c, U+9d7e, U+9d83-9d84, U+9d86-9d87, U+9d89-9d8a, U+9d8d-9d8e, U+9d92-9d93, U+9d95-9d9a, U+9da1, U+9da4, U+9da9-9dac, U+9dae, U+9db1-9db2, U+9db5, U+9db8-9dbd, U+9dbf-9dc4, U+9dc6-9dc7, U+9dc9-9dca, U+9dcf, U+9dd3-9dd7, U+9dd9-9dda, U+9dde-9de0, U+9de3, U+9de5-9de7, U+9de9, U+9deb, U+9ded-9df0, U+9df3-9df4, U+9df8, U+9dfd-9dfe, U+9e02, U+9e07, U+9e0a, U+9e0d-9e0e, U+9e10-9e12, U+9e15;
    }
    /* [7] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.7.woff2) format('woff2');
      unicode-range: U+9ac3, U+9ac6, U+9ac8, U+9ace-9ad3, U+9ad5-9ad7, U+9adb-9adc, U+9ade-9ae0, U+9ae2-9ae7, U+9ae9, U+9aeb-9aec, U+9aee-9aef, U+9af1-9af5, U+9af7, U+9af9-9afb, U+9afd, U+9aff-9b06, U+9b08-9b09, U+9b0b-9b0e, U+9b10, U+9b12, U+9b16, U+9b18-9b1d, U+9b1f-9b20, U+9b22-9b23, U+9b25-9b2f, U+9b32-9b35, U+9b37, U+9b39-9b3b, U+9b3d, U+9b43-9b44, U+9b48, U+9b4b-9b4f, U+9b51, U+9b55-9b58, U+9b5b, U+9b5e, U+9b61, U+9b63, U+9b65-9b66, U+9b68, U+9b6a-9b6f, U+9b72-9b79, U+9b7f-9b80, U+9b83-9b87, U+9b89-9b8b, U+9b8d, U+9b8f-9b94, U+9b96-9b97, U+9b9a, U+9b9d-9ba0, U+9ba6-9ba7, U+9ba9-9baa, U+9bac, U+9bb0-9bb2, U+9bb4, U+9bb7-9bb9, U+9bbb-9bbc, U+9bbe-9bc1, U+9bc6-9bc8, U+9bca, U+9bce-9bd2, U+9bd4, U+9bd7-9bd8, U+9bdd, U+9bdf, U+9be1-9be5, U+9be7, U+9bea-9beb, U+9bee-9bf3, U+9bf5, U+9bf7-9bfa, U+9bfd, U+9bff-9c00, U+9c02, U+9c04, U+9c06, U+9c08-9c0d, U+9c0f-9c16, U+9c18-9c1e, U+9c21;
    }
    /* [8] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.8.woff2) format('woff2');
      unicode-range: U+98c3-98c8, U+98cb-98cc, U+98ce, U+98dc, U+98de, U+98e0-98e1, U+98e3, U+98e5-98e7, U+98e9-98eb, U+98ed-98ee, U+98f0-98f1, U+98f3, U+98f6, U+9902, U+9907-9909, U+9911-9912, U+9914-9918, U+991a-9922, U+9924, U+9926-9927, U+992b-992c, U+992e, U+9931-9935, U+9939-993e, U+9940-9942, U+9945-9949, U+994b-994e, U+9950-9952, U+9954-9955, U+9958-9959, U+995b-995c, U+995e-9960, U+9963, U+9997-9998, U+999b, U+999d-999f, U+99a3, U+99a5-99a6, U+99a8, U+99ad-99ae, U+99b0-99b2, U+99b5, U+99b9-99ba, U+99bc-99bd, U+99bf, U+99c1, U+99c3, U+99c8-99c9, U+99d1, U+99d3-99d5, U+99d8-99df, U+99e1-99e2, U+99e7, U+99ea-99ee, U+99f0-99f2, U+99f4-99f5, U+99f8-99f9, U+99fb-99fe, U+9a01-9a05, U+9a08, U+9a0a-9a0c, U+9a0f-9a11, U+9a16, U+9a1a, U+9a1e, U+9a20, U+9a22-9a24, U+9a27, U+9a2b, U+9a2d-9a2e, U+9a31, U+9a33, U+9a35-9a38, U+9a3e, U+9a40-9a45, U+9a47, U+9a4a-9a4e, U+9a51-9a52, U+9a54-9a58, U+9a5b, U+9a5d, U+9a5f, U+9a62, U+9a64-9a65, U+9a69-9a6c, U+9aaa, U+9aac-9ab0, U+9ab2, U+9ab4-9ab7, U+9ab9, U+9abb-9ac1;
    }
    /* [9] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.9.woff2) format('woff2');
      unicode-range: U+96fa, U+9702-9706, U+9708-9709, U+970d-970f, U+9711, U+9713-9714, U+9716, U+9719-971b, U+971d, U+9721-9724, U+9728, U+972a, U+9730-9731, U+9733, U+9736, U+9738-9739, U+973b, U+973d-973e, U+9741-9744, U+9746-974a, U+974d-974f, U+9751, U+9755, U+9757-9758, U+975a-975c, U+9760-9761, U+9763-9764, U+9766-9768, U+976a-976b, U+976e, U+9771, U+9773, U+9776-977d, U+977f-9781, U+9785-9786, U+9789, U+978b, U+978f-9790, U+9795-9797, U+9799-979a, U+979c, U+979e-97a0, U+97a2-97a3, U+97a6, U+97a8, U+97ab-97ac, U+97ae, U+97b1-97b6, U+97b8-97ba, U+97bc, U+97be-97bf, U+97c1, U+97c3-97ce, U+97d0-97d1, U+97d4, U+97d7-97d9, U+97db-97de, U+97e0-97e1, U+97e4, U+97e6, U+97ed-97ef, U+97f1-97f2, U+97f4-97f8, U+97fa, U+9804, U+9807, U+980a, U+980c-980f, U+9814, U+9816-9817, U+9819-981a, U+981c, U+981e, U+9820-9821, U+9823-9826, U+982b, U+982e-9830, U+9832-9835, U+9837, U+9839, U+983d-983e, U+9844, U+9846-9847, U+984a-984b, U+984f, U+9851-9853, U+9856-9857, U+9859-985b, U+9862-9863, U+9865-9866, U+986a-986c, U+986f-9871, U+9873-9875, U+98aa-98ab, U+98ad-98ae, U+98b0-98b1, U+98b4, U+98b6-98b8, U+98ba-98bc, U+98bf, U+98c2;
    }
    /* [10] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.10.woff2) format('woff2');
      unicode-range: U+942e-942f, U+9431-9434, U+9436, U+9438, U+943a-943b, U+943d, U+943f, U+9441, U+9443-9445, U+9448, U+944a, U+944c, U+9452-9453, U+9455, U+9459-945c, U+945e-9463, U+9468, U+946a-946b, U+946d-9472, U+9475, U+9477, U+947c-947f, U+9481, U+9483-9485, U+9578-9579, U+957e-957f, U+9582, U+9584, U+9586-9588, U+958a, U+958c-958f, U+9592, U+9594, U+9596, U+9598-9599, U+959d-95a1, U+95a4, U+95a6-95a9, U+95ab-95ad, U+95b1, U+95b4, U+95b6, U+95b9-95bf, U+95c3, U+95c6, U+95c8-95cd, U+95d0-95d6, U+95d9-95da, U+95dc-95e2, U+95e4-95e6, U+95e8, U+961d-961e, U+9621-9622, U+9624-9626, U+9628, U+962c, U+962e-962f, U+9631, U+9633-9634, U+9637-963a, U+963c-963d, U+9641-9642, U+964b-964c, U+964f, U+9652, U+9654, U+9656-9658, U+965c-965f, U+9661, U+9666, U+966a, U+966c, U+966e, U+9672, U+9674, U+9677, U+967b-967c, U+967e-967f, U+9681-9684, U+9689, U+968b, U+968d, U+9691, U+9695-9698, U+969a, U+969d, U+969f, U+96a4-96aa, U+96ae-96b4, U+96b6, U+96b8-96bb, U+96bd, U+96c1, U+96c9-96cb, U+96cd-96ce, U+96d2, U+96d5-96d6, U+96d8-96da, U+96dc-96df, U+96e9, U+96ef, U+96f1, U+96f9;
    }
    /* [11] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.11.woff2) format('woff2');
      unicode-range: U+929f-92a0, U+92a4-92a5, U+92a7-92a8, U+92ab, U+92af, U+92b2-92b3, U+92b6-92bd, U+92bf-92c3, U+92c5-92c8, U+92cb-92d0, U+92d2-92d3, U+92d5, U+92d7-92d9, U+92dc-92dd, U+92df-92e1, U+92e3-92e5, U+92e7-92ea, U+92ec, U+92ee, U+92f0, U+92f2, U+92f7-92fb, U+92ff-9300, U+9302, U+9304, U+9308, U+930d, U+930f-9311, U+9314-9315, U+9318-931a, U+931c-931f, U+9321-9325, U+9327-932b, U+932e, U+9333-9337, U+933a-933b, U+9344, U+9347-934a, U+934d, U+9350-9352, U+9354-9358, U+935a, U+935c, U+935e, U+9360, U+9364-9365, U+9367, U+9369-936d, U+936f-9371, U+9373-9374, U+9376, U+937a, U+937d-9382, U+9388, U+938a-938b, U+938d, U+938f, U+9392, U+9394-9395, U+9397-9398, U+939a-939b, U+939e, U+93a1, U+93a3-93a4, U+93a6, U+93a8-93a9, U+93ab-93ad, U+93b0, U+93b4-93b6, U+93b9-93bb, U+93c1, U+93c3-93cd, U+93d0-93d1, U+93d3, U+93d6-93d9, U+93dc-93df, U+93e2, U+93e4-93e8, U+93f1, U+93f5, U+93f7-93fb, U+93fd, U+9401-9404, U+9407-9409, U+940d-9410, U+9413-9417, U+9419-941a, U+941f, U+9421, U+942b;
    }
    /* [12] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.12.woff2) format('woff2');
      unicode-range: U+9127, U+9129, U+912d-9132, U+9134, U+9136-9137, U+9139-913a, U+913c-913d, U+9143, U+9146-914c, U+914f, U+9153, U+9156-915b, U+9161, U+9163-9165, U+9167, U+9169, U+916d, U+9172-9174, U+9179-917b, U+9181-9183, U+9185-9187, U+9189-918b, U+918e, U+9191, U+9193-9195, U+9197-9198, U+919e, U+91a1-91a2, U+91a6, U+91a8, U+91aa-91b6, U+91ba-91bd, U+91bf-91c6, U+91c9, U+91cb, U+91d0, U+91d3-91d4, U+91d6-91d7, U+91d9-91db, U+91de-91df, U+91e1, U+91e4-91e6, U+91e9-91ea, U+91ec-91f1, U+91f5-91f7, U+91f9, U+91fb-91fd, U+91ff-9201, U+9204-9207, U+9209-920a, U+920c, U+920e, U+9210-9218, U+921c-921e, U+9223-9226, U+9228-9229, U+922c, U+922e-9230, U+9233, U+9235-923a, U+923c, U+923e-9240, U+9242-9243, U+9245-924b, U+924d-9251, U+9256-925a, U+925c-925e, U+9260-9261, U+9264-9269, U+926e-9270, U+9275-9279, U+927b-927f, U+9288-928a, U+928d-928e, U+9291-9293, U+9295-9297, U+9299, U+929b-929c;
    }
    /* [13] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.13.woff2) format('woff2');
      unicode-range: U+8f40-8f43, U+8f45-8f47, U+8f49-8f4a, U+8f4c-8f4f, U+8f51-8f55, U+8f57-8f58, U+8f5c-8f5e, U+8f61-8f66, U+8f9c-8f9d, U+8f9f-8fa2, U+8fa4-8fa8, U+8fad-8faf, U+8fb4-8fb8, U+8fbe, U+8fc0-8fc2, U+8fc6, U+8fc8, U+8fca-8fcb, U+8fcd, U+8fd0, U+8fd2-8fd3, U+8fd5, U+8fda, U+8fe0, U+8fe2-8fe5, U+8fe8-8fea, U+8fed-8fef, U+8ff1, U+8ff4-8ff6, U+8ff8-8ffb, U+8ffe, U+9002, U+9004-9005, U+9008, U+900b-900e, U+9011, U+9013, U+9015-9016, U+9018, U+901b, U+901e, U+9021, U+9027-902a, U+902c-902d, U+902f, U+9033-9037, U+9039, U+903c, U+903e-903f, U+9041, U+9043-9044, U+9049, U+904c, U+904f-9052, U+9056, U+9058, U+905b-905e, U+9062, U+9066-9068, U+906c, U+906f-9070, U+9072, U+9074, U+9076, U+9079, U+9080-9083, U+9085, U+9087-9088, U+908b-908c, U+908e-9090, U+9095, U+9097-9099, U+909b, U+90a0-90a2, U+90a5, U+90a8, U+90af-90b6, U+90bd-90be, U+90c3-90c5, U+90c7-90c9, U+90cc, U+90d2, U+90d5, U+90d7-90d9, U+90db-90df, U+90e2, U+90e4-90e5, U+90eb, U+90ef-90f0, U+90f2, U+90f4, U+90f6, U+90fe-9100, U+9102, U+9104-9106, U+9108, U+910d, U+9110, U+9112, U+9114-911a, U+911c, U+911e, U+9120, U+9122-9123, U+9125;
    }
    /* [14] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.14.woff2) format('woff2');
      unicode-range: U+8da6, U+8da8, U+8dab-8dac, U+8daf, U+8db2, U+8db5, U+8db7, U+8db9-8dbc, U+8dbe, U+8dc0, U+8dc2, U+8dc5-8dc8, U+8dca-8dcc, U+8dce-8dcf, U+8dd1, U+8dd4-8dd7, U+8dd9-8ddb, U+8ddf, U+8de3-8de5, U+8de7, U+8dea-8dec, U+8df0-8df2, U+8df4, U+8dfc-8dfd, U+8dff, U+8e01, U+8e04-8e06, U+8e08-8e09, U+8e0b-8e0c, U+8e10-8e11, U+8e14, U+8e16, U+8e1d-8e23, U+8e26-8e27, U+8e30-8e31, U+8e33-8e39, U+8e3d, U+8e40-8e42, U+8e44, U+8e47-8e50, U+8e54-8e55, U+8e59, U+8e5b-8e64, U+8e69, U+8e6c-8e6d, U+8e6f-8e72, U+8e75-8e77, U+8e79-8e7c, U+8e81-8e85, U+8e89, U+8e8b, U+8e90-8e95, U+8e98-8e9b, U+8e9d-8e9e, U+8ea1-8ea2, U+8ea7, U+8ea9-8eaa, U+8eac-8eb1, U+8eb3, U+8eb5-8eb6, U+8eba-8ebb, U+8ebe, U+8ec0-8ec1, U+8ec3-8ec8, U+8ecb, U+8ecf, U+8ed1, U+8ed4, U+8edb-8edc, U+8ee3, U+8ee8, U+8eeb, U+8eed-8eee, U+8ef0-8ef1, U+8ef7, U+8ef9-8efc, U+8efe, U+8f00, U+8f02, U+8f05, U+8f07-8f08, U+8f0a, U+8f0f-8f10, U+8f12-8f13, U+8f15-8f19, U+8f1b-8f1c, U+8f1e-8f21, U+8f23, U+8f25-8f28, U+8f2b-8f2f, U+8f33-8f37, U+8f39-8f3b, U+8f3e;
    }
    /* [15] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.15.woff2) format('woff2');
      unicode-range: U+8b11, U+8b14, U+8b16, U+8b1a, U+8b1c, U+8b1e-8b20, U+8b26, U+8b28, U+8b2b-8b2d, U+8b30, U+8b37, U+8b3c, U+8b3e, U+8b41-8b46, U+8b48-8b49, U+8b4c-8b4f, U+8b51-8b54, U+8b56, U+8b59, U+8b5b, U+8b5e-8b5f, U+8b63, U+8b69, U+8b6b-8b6d, U+8b6f, U+8b71, U+8b74, U+8b76, U+8b78-8b79, U+8b7c-8b81, U+8b84-8b85, U+8b8a-8b8f, U+8b92-8b96, U+8b99-8b9a, U+8b9c-8ba0, U+8c38-8c3a, U+8c3d-8c3f, U+8c41, U+8c45, U+8c47-8c49, U+8c4b-8c4c, U+8c4e-8c51, U+8c53-8c55, U+8c57-8c59, U+8c5b, U+8c5d, U+8c62-8c64, U+8c66, U+8c68-8c69, U+8c6b-8c6d, U+8c73, U+8c75-8c76, U+8c78, U+8c7a-8c7c, U+8c7e, U+8c82, U+8c85-8c87, U+8c89-8c8b, U+8c8d-8c8e, U+8c90, U+8c92-8c94, U+8c98-8c99, U+8c9b-8c9c, U+8c9f, U+8ca4, U+8cad-8cae, U+8cb2-8cb3, U+8cb6, U+8cb9-8cba, U+8cbd, U+8cc1-8cc2, U+8cc4-8cc6, U+8cc8-8cc9, U+8ccb, U+8ccd-8ccf, U+8cd2, U+8cd5-8cd6, U+8cd9-8cda, U+8cdd, U+8ce1, U+8ce3-8ce4, U+8ce6, U+8ce8, U+8cec, U+8cef-8cf2, U+8cf4-8cf5, U+8cf7-8cf8, U+8cfa-8cfb, U+8cfd-8cff, U+8d01, U+8d03-8d04, U+8d07, U+8d09-8d0b, U+8d0d-8d10, U+8d12-8d14, U+8d16-8d17, U+8d1b-8d1d, U+8d65, U+8d67, U+8d69, U+8d6b-8d6e, U+8d71, U+8d73, U+8d76, U+8d7f, U+8d81-8d82, U+8d84, U+8d88, U+8d8d, U+8d90-8d91, U+8d95, U+8d99, U+8d9e-8da0;
    }
    /* [16] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.16.woff2) format('woff2');
      unicode-range: U+8962-8964, U+8966, U+896a-896b, U+896d-8970, U+8973-8975, U+8977, U+897a-897e, U+8980, U+8983, U+8988-898a, U+898d, U+8990, U+8993-8995, U+8998, U+899b-899c, U+899f-89a1, U+89a5-89a6, U+89a9, U+89ac, U+89af-89b0, U+89b2, U+89b4-89b7, U+89ba, U+89bc-89bd, U+89bf-89c1, U+89d4-89d8, U+89da, U+89dc-89dd, U+89e5, U+89e7, U+89e9, U+89eb, U+89ed, U+89f1, U+89f3-89f4, U+89f6, U+89f8-89f9, U+89fd, U+89ff, U+8a01, U+8a04-8a05, U+8a07, U+8a0c, U+8a0f-8a12, U+8a14-8a16, U+8a1b, U+8a1d-8a1e, U+8a20-8a22, U+8a24-8a26, U+8a2b-8a2c, U+8a2f, U+8a35-8a37, U+8a3b, U+8a3d-8a3e, U+8a40-8a41, U+8a43, U+8a45-8a49, U+8a4d-8a4e, U+8a51-8a54, U+8a56-8a58, U+8a5b-8a5d, U+8a61-8a62, U+8a65, U+8a67, U+8a6c-8a6d, U+8a75-8a77, U+8a79-8a7c, U+8a7e-8a80, U+8a82-8a86, U+8a8b, U+8a8f-8a92, U+8a96-8a97, U+8a99-8a9a, U+8a9f, U+8aa1, U+8aa3, U+8aa5-8aaa, U+8aae-8aaf, U+8ab3, U+8ab6-8ab7, U+8abb-8abc, U+8abe, U+8ac2-8ac4, U+8ac6, U+8ac8-8aca, U+8acc-8acd, U+8ad0-8ad5, U+8ad7, U+8ada-8ae2, U+8ae4, U+8ae7, U+8aeb-8aec, U+8aee, U+8af0-8af1, U+8af3-8af7, U+8afa, U+8afc, U+8aff, U+8b01-8b02, U+8b04-8b07, U+8b0a-8b0d, U+8b0f-8b10;
    }
    /* [17] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.17.woff2) format('woff2');
      unicode-range: U+87d0, U+87d2, U+87d5-87d6, U+87d9-87da, U+87dc, U+87df-87e0, U+87e2-87e6, U+87ea-87ed, U+87ef, U+87f1, U+87f3, U+87f5-87f8, U+87fa-87fb, U+87fe-87ff, U+8801, U+8803, U+8805-8807, U+8809-880b, U+880d-8816, U+8818-881c, U+881e-881f, U+8821-8822, U+8827-8828, U+882d-882e, U+8830-8832, U+8835-8836, U+8839-883c, U+8841-8845, U+8848-884b, U+884d-884e, U+8851-8852, U+8855-8856, U+8858-885a, U+885c, U+885e-8860, U+8862, U+8864, U+8869, U+886b, U+886e-886f, U+8871-8872, U+8875, U+8877, U+8879, U+887b, U+887d-887e, U+8880-8882, U+8888, U+888d, U+8892, U+8897-889c, U+889e-88a0, U+88a2, U+88a4, U+88a8, U+88aa, U+88ae, U+88b0-88b1, U+88b5, U+88b7, U+88ba, U+88bc-88c0, U+88c3-88c4, U+88c6, U+88ca-88ce, U+88d1-88d4, U+88d8-88d9, U+88db, U+88dd-88e1, U+88e7-88e8, U+88ef-88f2, U+88f4-88f5, U+88f7, U+88f9, U+88fc, U+8901-8902, U+8904, U+8906, U+890a, U+890c-890f, U+8913, U+8915-8916, U+8918-891a, U+891c-891e, U+8920, U+8925-8928, U+892a-892b, U+8930-8932, U+8935-893b, U+893e, U+8940-8946, U+8949, U+894c-894d, U+894f, U+8952, U+8956-8957, U+895a-895c, U+895e, U+8960-8961;
    }
    /* [18] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.18.woff2) format('woff2');
      unicode-range: U+8640-8642, U+8646, U+864d, U+8652-8659, U+865b, U+865d-8664, U+8667, U+8669, U+866c, U+866f, U+8671, U+8675-8677, U+867a-867b, U+867d, U+8687-8689, U+868b-868d, U+8691, U+8693, U+8695-8696, U+8698, U+869a, U+869c-869d, U+86a1, U+86a3-86a4, U+86a6-86ab, U+86ad, U+86af-86b1, U+86b3-86b9, U+86bf-86c1, U+86c3-86c6, U+86c9, U+86cb, U+86ce, U+86d1-86d2, U+86d4-86d5, U+86d7, U+86da, U+86dc, U+86de-86e0, U+86e3-86e7, U+86e9, U+86ec-86ed, U+86ef, U+86f8-86fe, U+8700, U+8703-870b, U+870d-8714, U+8719-871a, U+871e-871f, U+8721-8723, U+8725, U+8728-8729, U+872e-872f, U+8731-8732, U+8734, U+8737, U+8739-8740, U+8743, U+8745, U+8749, U+874b-874e, U+8751, U+8753, U+8755, U+8757-8759, U+875d, U+875f-8761, U+8763-8766, U+8768, U+876a, U+876e-876f, U+8771-8772, U+8774, U+8778, U+877b-877c, U+877f, U+8782-8789, U+878b-878c, U+878e, U+8790, U+8793, U+8795, U+8797-8799, U+879e-87a0, U+87a2-87a3, U+87a7, U+87ab-87af, U+87b1, U+87b3, U+87b5, U+87bb, U+87bd-87c1, U+87c4, U+87c6-87cb, U+87ce;
    }
    /* [19] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.19.woff2) format('woff2');
      unicode-range: U+84a6, U+84a8-84aa, U+84ad, U+84af, U+84b1, U+84b4, U+84b9-84bb, U+84bd-84c2, U+84c6-84ca, U+84cc-84d1, U+84d3, U+84d6, U+84d9-84da, U+84dc, U+84e7, U+84ea, U+84ec, U+84ef-84f2, U+84f4, U+84f7, U+84fa-84fd, U+84ff-8500, U+8502-8503, U+8506-8507, U+850c, U+850e, U+8510, U+8514-8515, U+8517-8518, U+851a-851c, U+851e-851f, U+8521-8525, U+8527, U+852a-852c, U+852f, U+8532-8534, U+8536, U+853e-8541, U+8543, U+8546, U+8548, U+854a-854b, U+854f-8553, U+8555-855a, U+855c-8564, U+8569-856b, U+856d, U+856f, U+8577, U+8579-857b, U+857d-8581, U+8585-8586, U+8588-858c, U+858f-8591, U+8593, U+8597-8598, U+859b-859d, U+859f-85a0, U+85a2, U+85a4-85a5, U+85a7-85a8, U+85ad-85b0, U+85b4, U+85b6-85ba, U+85bc-85bf, U+85c1-85c2, U+85c7, U+85c9-85cb, U+85ce-85d0, U+85d5, U+85d8-85da, U+85dc, U+85df-85e1, U+85e5-85e6, U+85e8, U+85ed, U+85f3-85f4, U+85f6-85f7, U+85f9-85fa, U+85fc, U+85fe-8600, U+8602, U+8604-8606, U+860a-860b, U+860d-860e, U+8610-8613, U+8616-861b, U+861e, U+8621-8622, U+8624, U+8627, U+8629, U+862f-8630, U+8636, U+8638-863a, U+863c-863d, U+863f;
    }
    /* [20] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.20.woff2) format('woff2');
      unicode-range: U+82e0-82e4, U+82e7-82e8, U+82ea, U+82ed, U+82ef, U+82f3-82f4, U+82f6-82f7, U+82f9, U+82fb, U+82fd-82fe, U+8300-8301, U+8303, U+8306-8308, U+830a-830c, U+8316-8318, U+831b, U+831d-831f, U+8321-8323, U+832b-8335, U+8337, U+833a, U+833c-833d, U+8340, U+8342-8347, U+834a, U+834d-8351, U+8353-8357, U+835a, U+8362-8363, U+8370, U+8373, U+8375, U+8378, U+837c-837d, U+837f-8380, U+8382, U+8384-8387, U+838a, U+838d-838e, U+8392-8396, U+8398-83a0, U+83a2, U+83a6-83ad, U+83b1, U+83b5, U+83bd-83c1, U+83c7, U+83c9, U+83ce-83d1, U+83d4, U+83d6, U+83d8, U+83dd, U+83df-83e1, U+83e5, U+83e8, U+83ea-83eb, U+83f0, U+83f2, U+83f4, U+83f6-83f9, U+83fb-83fd, U+8401, U+8403-8404, U+8406-8407, U+840a-840b, U+840d, U+840f, U+8411, U+8413, U+8415, U+8417, U+8419, U+8420, U+8422, U+842a, U+842f, U+8431, U+8435, U+8438-8439, U+843c, U+8445-8448, U+844a, U+844d-844f, U+8451-8452, U+8456, U+8458-845a, U+845c, U+845f-8462, U+8464-8467, U+8469-846b, U+846d-8470, U+8473-8474, U+8476-847a, U+847c-847d, U+8481-8482, U+8484-8485, U+848b, U+8490, U+8492-8493, U+8495, U+8497, U+849c, U+849e-849f, U+84a1;
    }
    /* [21] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.21.woff2) format('woff2');
      unicode-range: U+813e, U+8141, U+8145-8147, U+814a, U+814c, U+8151-8153, U+8157, U+815f-8161, U+8165-8169, U+816d-816f, U+8171, U+8173-8174, U+8177, U+8180-8186, U+8188, U+818a-818b, U+818e, U+8190, U+8193, U+8195-8196, U+8198, U+819b, U+819e, U+81a0, U+81a2, U+81a4, U+81a9, U+81ae, U+81b0, U+81b2, U+81b4-81b5, U+81b8, U+81ba-81bb, U+81bd-81be, U+81c0-81c3, U+81c5-81c6, U+81c8-81cb, U+81cd-81cf, U+81d1, U+81d5-81db, U+81dd-81e1, U+81e4-81e5, U+81e7, U+81eb-81ec, U+81ef-81f2, U+81f5-81f6, U+81f8-81fb, U+81fd-8205, U+8209-820b, U+820d, U+820f, U+8212-8214, U+8216, U+8219-821d, U+8221-8222, U+8228-8229, U+822b, U+822e, U+8232-8235, U+8237-8238, U+823a, U+823c, U+8240, U+8243-8246, U+8249, U+824b, U+824e-824f, U+8251, U+8256-825a, U+825c-825d, U+825f-8260, U+8262-8264, U+8267-8268, U+826a-826b, U+826d-826e, U+8271, U+8274, U+8277, U+8279, U+827b, U+827d-8281, U+8283-8284, U+8287, U+8289-828a, U+828d-828e, U+8291-8294, U+8296, U+8298-829b, U+829f-82a1, U+82a3-82a4, U+82a7-82ac, U+82ae, U+82b0, U+82b2, U+82b4, U+82b7, U+82ba-82bc, U+82be-82bf, U+82c5-82c6, U+82d0, U+82d2-82d3, U+82d5, U+82d9-82da, U+82dc, U+82de-82df;
    }
    /* [22] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.22.woff2) format('woff2');
      unicode-range: U+7f68-7f69, U+7f6b, U+7f6d, U+7f71, U+7f77-7f79, U+7f7d-7f80, U+7f82-7f83, U+7f86-7f88, U+7f8b-7f8d, U+7f8f-7f91, U+7f94, U+7f96-7f97, U+7f9a, U+7f9c-7f9d, U+7fa1-7fa3, U+7fa6, U+7faa, U+7fad-7faf, U+7fb2, U+7fb4, U+7fb6, U+7fb8-7fb9, U+7fbc, U+7fbf-7fc0, U+7fc3, U+7fc5-7fc6, U+7fc8, U+7fca, U+7fce-7fcf, U+7fd5, U+7fdb, U+7fdf, U+7fe1, U+7fe3, U+7fe5-7fe6, U+7fe8-7fe9, U+7feb-7fec, U+7fee-7ff0, U+7ff2-7ff3, U+7ff9-7ffa, U+7ffd-7fff, U+8002, U+8004, U+8006-8008, U+800a-800f, U+8011-8014, U+8016, U+8018-8019, U+801c-8021, U+8024, U+8026, U+8028, U+802c, U+802e, U+8030, U+8034-8035, U+8037, U+8039-8040, U+8043-8044, U+8046, U+804a, U+8052, U+8058, U+805a, U+805f-8060, U+8062, U+8064, U+8066, U+8068, U+806d, U+806f-8073, U+8075-8076, U+8079, U+807b, U+807d-8081, U+8084-8088, U+808b, U+808e, U+8093, U+8099-809a, U+809c, U+809e, U+80a4, U+80a6-80a7, U+80ab-80ad, U+80b1, U+80b8-80b9, U+80c4-80c5, U+80c8, U+80ca, U+80cd, U+80cf, U+80d2, U+80d4-80db, U+80dd, U+80e0, U+80e4-80e6, U+80ed-80f3, U+80f5-80f7, U+80f9-80fc, U+80fe, U+8103, U+8109, U+810b, U+810d, U+8116-8118, U+811b-811c, U+811e, U+8120, U+8123-8124, U+8127, U+8129, U+812b-812c, U+812f-8130, U+8135, U+8139-813a, U+813c-813d;
    }
    /* [23] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.23.woff2) format('woff2');
      unicode-range: U+7d51, U+7d53, U+7d55-7d57, U+7d59-7d5d, U+7d63, U+7d65, U+7d67, U+7d6a, U+7d6e, U+7d70, U+7d72-7d73, U+7d78, U+7d7a-7d7b, U+7d7d, U+7d7f, U+7d81-7d83, U+7d85-7d86, U+7d88-7d89, U+7d8b-7d8d, U+7d8f, U+7d91, U+7d93, U+7d96-7d97, U+7d9b-7da0, U+7da2-7da3, U+7da6-7da7, U+7daa-7dac, U+7dae-7db0, U+7db3, U+7db5-7db9, U+7dbd, U+7dc0, U+7dc2-7dc7, U+7dcc-7dce, U+7dd0, U+7dd5-7dd9, U+7ddc-7dde, U+7de1-7de6, U+7dea-7ded, U+7df1-7df2, U+7df5-7df6, U+7df9-7dfa, U+7e00, U+7e05, U+7e08-7e0b, U+7e10-7e12, U+7e15, U+7e17, U+7e1c-7e1d, U+7e1f-7e23, U+7e27-7e28, U+7e2c-7e2d, U+7e2f, U+7e31-7e33, U+7e35-7e37, U+7e39-7e3b, U+7e3d, U+7e3f, U+7e43-7e48, U+7e4e, U+7e50, U+7e52, U+7e56, U+7e58-7e5a, U+7e5d-7e5f, U+7e61-7e62, U+7e65-7e67, U+7e69-7e6b, U+7e6d-7e6f, U+7e73, U+7e75, U+7e78-7e79, U+7e7b-7e7f, U+7e81-7e83, U+7e86-7e8a, U+7e8c-7e8e, U+7e90-7e96, U+7e98, U+7e9a-7e9f, U+7f38, U+7f3a-7f3f, U+7f43-7f45, U+7f47, U+7f4c-7f50, U+7f52-7f55, U+7f58, U+7f5b-7f5d, U+7f5f, U+7f61, U+7f63-7f67;
    }
    /* [24] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.24.woff2) format('woff2');
      unicode-range: U+7bc2, U+7bc5-7bc6, U+7bc8, U+7bca-7bcc, U+7bcf, U+7bd4, U+7bd6-7bd7, U+7bd9-7bdb, U+7bdd, U+7be5-7be6, U+7be8-7bea, U+7bf0, U+7bf2-7bfa, U+7bfc, U+7bfe, U+7c00-7c04, U+7c06-7c07, U+7c09, U+7c0b-7c0f, U+7c11-7c14, U+7c17, U+7c19, U+7c1b, U+7c1e-7c20, U+7c23, U+7c25-7c28, U+7c2a-7c2c, U+7c2f, U+7c31, U+7c33-7c34, U+7c36-7c3a, U+7c3d-7c3e, U+7c40, U+7c42-7c43, U+7c45-7c46, U+7c4a, U+7c4c, U+7c4f-7c5f, U+7c61, U+7c63-7c65, U+7c67, U+7c69, U+7c6c-7c70, U+7c72, U+7c75, U+7c79, U+7c7b-7c7e, U+7c81-7c83, U+7c86-7c87, U+7c8d, U+7c8f-7c90, U+7c94, U+7c9e, U+7ca0-7ca2, U+7ca4-7ca6, U+7ca8, U+7cab, U+7cad-7cae, U+7cb0-7cb3, U+7cb6-7cb7, U+7cb9-7cbd, U+7cbf-7cc0, U+7cc2, U+7cc4-7cc5, U+7cc7-7cca, U+7ccd-7ccf, U+7cd2-7cd5, U+7cd7-7cda, U+7cdc-7cdd, U+7cdf-7ce0, U+7ce2, U+7ce6, U+7ce9, U+7ceb, U+7cef, U+7cf2, U+7cf4-7cf6, U+7cf9-7cfa, U+7cfe, U+7d02-7d03, U+7d06-7d0a, U+7d0f, U+7d11-7d13, U+7d15-7d16, U+7d1c-7d1e, U+7d23, U+7d26, U+7d2a, U+7d2c-7d2e, U+7d31-7d32, U+7d35, U+7d3c-7d41, U+7d43, U+7d45, U+7d47-7d48, U+7d4b, U+7d4d-7d4f;
    }
    /* [25] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.25.woff2) format('woff2');
      unicode-range: U+7a11, U+7a15, U+7a17-7a19, U+7a1b, U+7a1e-7a21, U+7a27, U+7a2b, U+7a2d, U+7a2f-7a31, U+7a34-7a35, U+7a37-7a3b, U+7a3e, U+7a43-7a49, U+7a4c, U+7a4e, U+7a50, U+7a55-7a57, U+7a59, U+7a5c-7a5d, U+7a5f-7a63, U+7a65, U+7a67, U+7a69-7a6a, U+7a6d, U+7a70, U+7a75, U+7a78-7a79, U+7a7d-7a7e, U+7a80, U+7a82, U+7a84-7a86, U+7a88, U+7a8a-7a8b, U+7a90-7a91, U+7a94-7a98, U+7a9e, U+7aa0, U+7aa3, U+7aa9, U+7aac, U+7ab0, U+7ab3, U+7ab5-7ab6, U+7ab9-7abf, U+7ac3, U+7ac5-7aca, U+7acc-7acf, U+7ad1-7ad3, U+7ad5, U+7ada-7adb, U+7add, U+7adf, U+7ae1-7ae2, U+7ae6-7aed, U+7af0-7af1, U+7af4, U+7af8, U+7afa-7afb, U+7afd-7afe, U+7b02, U+7b04, U+7b06-7b08, U+7b0a-7b0b, U+7b0f, U+7b12, U+7b14, U+7b18-7b19, U+7b1e-7b1f, U+7b23, U+7b25, U+7b27-7b2b, U+7b2d-7b31, U+7b33-7b36, U+7b3b, U+7b3d, U+7b3f-7b41, U+7b45, U+7b47, U+7b4c-7b50, U+7b53, U+7b55, U+7b5d, U+7b60, U+7b64-7b66, U+7b69-7b6a, U+7b6c-7b75, U+7b77, U+7b79-7b7a, U+7b7f, U+7b84, U+7b86, U+7b89, U+7b8d-7b92, U+7b96, U+7b98-7ba0, U+7ba5, U+7bac-7bad, U+7baf-7bb0, U+7bb2, U+7bb4-7bb6, U+7bba-7bbd, U+7bc1;
    }
    /* [26] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.26.woff2) format('woff2');
      unicode-range: U+784f, U+7851-7852, U+785c, U+785e, U+7860-7861, U+7863-7864, U+7868, U+786a, U+786e-786f, U+7872, U+7874, U+787a, U+787c, U+787e, U+7886-7887, U+788a, U+788c-788f, U+7893-7895, U+7898, U+789a, U+789d-789f, U+78a1, U+78a3-78a4, U+78a8-78aa, U+78ac-78ad, U+78af-78b3, U+78b5, U+78bb-78bf, U+78c5-78cc, U+78ce, U+78d1-78d6, U+78da-78db, U+78df-78e1, U+78e4, U+78e6-78e7, U+78ea, U+78ec, U+78f2-78f4, U+78f6-78f7, U+78f9-78fb, U+78fd-7901, U+7906-7907, U+790c, U+7910-7912, U+7919-791c, U+791e-7920, U+7925-792e, U+7930-7931, U+7934-7935, U+793b, U+793d, U+793f, U+7941-7942, U+7944-7946, U+794a-794b, U+794f, U+7951, U+7954-7955, U+7957-7958, U+795a-795c, U+795f-7960, U+7962, U+7967, U+7969, U+796b, U+7972, U+7977, U+7979-797c, U+797e-7980, U+798a-798e, U+7991, U+7993-7996, U+7998, U+799b-799d, U+79a1, U+79a6-79ab, U+79ae-79b1, U+79b3-79b4, U+79b8-79bb, U+79bd-79be, U+79c2, U+79c4, U+79c7-79ca, U+79cc-79cd, U+79cf, U+79d4-79d6, U+79da, U+79dd-79e3, U+79e5, U+79e7, U+79ea-79ed, U+79f1, U+79f8, U+79fc, U+7a02-7a03, U+7a05, U+7a07-7a0a, U+7a0c-7a0d;
    }
    /* [27] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.27.woff2) format('woff2');
      unicode-range: U+768c-768e, U+7690, U+7693, U+7695-7696, U+7699-76a8, U+76aa, U+76ad, U+76af-76b0, U+76b4, U+76b6-76ba, U+76bd, U+76c1-76c3, U+76c5, U+76c8-76c9, U+76cb-76ce, U+76d2, U+76d4, U+76d6, U+76d9, U+76dc, U+76de, U+76e0-76e1, U+76e5-76e8, U+76ea-76ec, U+76f0-76f1, U+76f6, U+76f9, U+76fb-76fc, U+7700, U+7704, U+7706-7708, U+770a, U+770e, U+7712, U+7714-7715, U+7717, U+7719-771c, U+7722, U+7724-7726, U+7728, U+772d-772f, U+7734-7739, U+773d-773e, U+7742, U+7745-7747, U+774a, U+774d-774f, U+7752, U+7756-7758, U+775a-775c, U+775e-7760, U+7762, U+7764-7765, U+7767, U+776a-776c, U+7770, U+7772-7774, U+7779-777a, U+777c-7780, U+7784, U+778b-778e, U+7794-7796, U+779a, U+779e-77a0, U+77a2, U+77a4-77a5, U+77a7, U+77a9-77aa, U+77ae-77b1, U+77b5-77b7, U+77b9, U+77bb-77bf, U+77c3, U+77c7, U+77c9, U+77cd, U+77d1-77d2, U+77d5, U+77d7, U+77d9-77da, U+77dc, U+77de-77e0, U+77e3-77e4, U+77e6-77e7, U+77e9-77ea, U+77ec, U+77ee, U+77f0-77f1, U+77f4, U+77f8, U+77fb-77fc, U+7805-7806, U+7809, U+780c-780e, U+7811-7812, U+7819, U+781d, U+7820-7823, U+7826-7827, U+782c-782e, U+7830, U+7835, U+7837, U+783a, U+783f, U+7843-7845, U+7847-7848, U+784c, U+784e;
    }
    /* [28] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.28.woff2) format('woff2');
      unicode-range: U+7512-7513, U+7515-7517, U+751c, U+751e, U+7520-7522, U+7524, U+7526-7527, U+7529-752c, U+752f, U+7536, U+7538-7539, U+753c-7540, U+7543-7544, U+7546-754b, U+754d-7550, U+7552, U+7557, U+755a-755b, U+755d-755f, U+7561-7562, U+7564, U+7566-7567, U+7569, U+756b-756d, U+756f, U+7571-7572, U+7574-757e, U+7581-7582, U+7585-7587, U+7589-758c, U+758f-7590, U+7592-7595, U+7599-759a, U+759c-759d, U+75a2-75a5, U+75b0-75b1, U+75b3-75b5, U+75b7-75b8, U+75ba, U+75bd, U+75bf-75c4, U+75c6, U+75ca, U+75cc-75cf, U+75d3-75d4, U+75d7-75d8, U+75dc-75e1, U+75e3-75e4, U+75e7, U+75ec, U+75ee-75f3, U+75f9, U+75fc, U+75fe-7604, U+7607-760c, U+760f, U+7612-7613, U+7615-7616, U+7618-7619, U+761b-7629, U+762d, U+7630, U+7632-7635, U+7638-763c, U+7640-7641, U+7643-764b, U+764e, U+7655, U+7658-7659, U+765c, U+765f, U+7661-7662, U+7664-7665, U+7667-766a, U+766c-7672, U+7674, U+7676, U+7678, U+7680-7683, U+7685, U+7688, U+768b;
    }
    /* [29] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.29.woff2) format('woff2');
      unicode-range: U+736f-7371, U+7375, U+7377-737c, U+7380-7381, U+7383, U+7385-7386, U+738a, U+738e, U+7390, U+7393-7398, U+739c, U+739e-73a0, U+73a2, U+73a5-73a6, U+73a8, U+73aa-73ab, U+73ad, U+73b3, U+73b5, U+73b7, U+73b9-73bd, U+73bf, U+73c5-73c6, U+73c9-73cc, U+73ce-73cf, U+73d2-73d3, U+73d6, U+73d9, U+73dd-73de, U+73e1, U+73e3-73e7, U+73e9-73ea, U+73ee, U+73f1, U+73f4-73f5, U+73f7-73fb, U+73fd, U+73ff-7401, U+7404-7405, U+7407, U+740a, U+7411, U+7413, U+741a-741b, U+7421, U+7424, U+7426, U+7428-7431, U+7433, U+7439-743a, U+743f-7441, U+7443-7444, U+7446-7447, U+744b, U+744d, U+7451-7453, U+7455, U+7457, U+7459-745a, U+745c-745d, U+745f, U+7462-7464, U+7466-746b, U+746d-7473, U+7476, U+747e, U+7480-7481, U+7485-7489, U+748b, U+748f-7492, U+7497-749a, U+749c, U+749e-74a3, U+74a5-74a6, U+74a8-74ab, U+74ae-74af, U+74b1-74b2, U+74b5, U+74b9-74bb, U+74bd, U+74bf, U+74c8-74ca, U+74cc, U+74cf-74d0, U+74d3-74d4, U+74d6, U+74d8, U+74da-74db, U+74de-74e0, U+74e3-74e4, U+74e7-74eb, U+74ee-74f2, U+74f4, U+74f7-74f8, U+74fa-74fc, U+74ff, U+7501, U+7503-7506, U+750c-750e, U+7511;
    }
    /* [30] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.30.woff2) format('woff2');
      unicode-range: U+7179, U+7180, U+7184-7185, U+7187-7188, U+718c, U+718f, U+7192, U+7194-7196, U+7199-719b, U+71a0, U+71a2, U+71a8, U+71ac, U+71ae-71b0, U+71b2-71b3, U+71b9-71ba, U+71be-71c1, U+71c4, U+71c9, U+71cb-71cc, U+71ce, U+71d0, U+71d2-71d4, U+71d6-71d7, U+71d9-71da, U+71dc, U+71df-71e0, U+71e6-71e7, U+71ec-71ee, U+71f4-71f5, U+71f8-71f9, U+71fc, U+71fe-7200, U+7207-7209, U+720d, U+7210, U+7213, U+7215, U+7217, U+721a, U+721d, U+721f, U+7224, U+7228, U+722b, U+722d, U+722f-7230, U+7232, U+7234, U+7238-7239, U+723b-723c, U+723e-7243, U+7245-7246, U+724b, U+724e-7250, U+7252-7253, U+7255-7258, U+725a, U+725c, U+725e, U+7260, U+7263, U+7268, U+726b, U+726e-726f, U+7271, U+7274, U+7277-7278, U+727b-727c, U+727e-7282, U+7284, U+7287, U+7289, U+728d-728e, U+7292-7293, U+7296, U+729b, U+72a2, U+72a7-72a8, U+72ad-72ae, U+72b0-72b2, U+72b4, U+72b9, U+72be, U+72c0-72c1, U+72c3-72c4, U+72c6-72c7, U+72c9, U+72cc, U+72ce, U+72d2, U+72d5-72d6, U+72d8, U+72df-72e2, U+72e5, U+72f3-72f4, U+72f7, U+72f9-72fb, U+72fd-72fe, U+7302, U+7304-7305, U+7307, U+730a-730b, U+730d, U+7312-7313, U+7316-7319, U+731c-731e, U+7322, U+7324, U+7327-7329, U+732c, U+732f, U+7331-7337, U+7339-733b, U+733d-733e, U+7343, U+734d-7350, U+7352, U+7356-7358, U+735d-7360, U+7366-736c, U+736e;
    }
    /* [31] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.31.woff2) format('woff2');
      unicode-range: U+6f5d-6f5e, U+6f60-6f62, U+6f66, U+6f68, U+6f6c-6f6d, U+6f6f, U+6f74, U+6f78, U+6f7a, U+6f7c-6f7e, U+6f80, U+6f82-6f83, U+6f86-6f88, U+6f8b-6f8e, U+6f90-6f94, U+6f96-6f98, U+6f9a, U+6f9d, U+6f9f-6fa1, U+6fa3, U+6fa5-6fa8, U+6fae-6fb1, U+6fb3, U+6fb5-6fb7, U+6fb9, U+6fbc, U+6fbe, U+6fc2, U+6fc5-6fca, U+6fd4-6fd5, U+6fd8, U+6fda-6fdb, U+6fde-6fe0, U+6fe4, U+6fe8-6fe9, U+6feb-6fec, U+6fee, U+6ff0, U+6ff3, U+6ff5-6ff6, U+6ff9-6ffa, U+6ffc-6ffe, U+7000-7001, U+7005-7007, U+7009-700b, U+700d, U+700f, U+7011, U+7015, U+7017-7018, U+701a-701b, U+701d-7020, U+7023, U+7026, U+7028, U+702f-7030, U+7032, U+7034, U+7037, U+7039-703a, U+703c, U+703e, U+7043-7044, U+7047-704c, U+704e, U+7051, U+7054-7055, U+705d-705e, U+7064-7065, U+7069, U+706c, U+706e, U+7075-7076, U+707e, U+7081, U+7085-7086, U+7094-7098, U+709b, U+709f, U+70a4, U+70ab-70ac, U+70ae-70b1, U+70b3-70b4, U+70b7, U+70bb, U+70ca-70cb, U+70d1, U+70d3-70d6, U+70d8-70d9, U+70dc-70dd, U+70df, U+70e4, U+70ec, U+70f1, U+70fa, U+70fd, U+7103-7108, U+710b-710c, U+710f, U+7114, U+7119, U+711c, U+711e, U+7120, U+712b, U+712d-7131, U+7138, U+7141, U+7145-7147, U+7149-714b, U+7150-7153, U+7155-7157, U+715a, U+715c, U+715e, U+7160, U+7162, U+7164-7166, U+7168, U+716c;
    }
    /* [32] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.32.woff2) format('woff2');
      unicode-range: U+6d87, U+6d89-6d8a, U+6d8c-6d8e, U+6d91-6d98, U+6d9c, U+6daa-6dac, U+6dae, U+6db4-6db5, U+6db7-6db9, U+6dbd, U+6dbf, U+6dc2, U+6dc4-6dc8, U+6dca, U+6dcc, U+6dce-6dd0, U+6dd2, U+6dd5-6dd6, U+6dd8-6ddb, U+6ddd-6de0, U+6de2, U+6de4-6de6, U+6de8-6dea, U+6dec, U+6dee-6df0, U+6df2, U+6df4, U+6df6, U+6df8-6dfa, U+6dfc, U+6e00, U+6e04, U+6e0a, U+6e17, U+6e19, U+6e1d-6e20, U+6e22-6e25, U+6e27, U+6e2b, U+6e2d-6e2e, U+6e32, U+6e34, U+6e36, U+6e38-6e3c, U+6e42-6e45, U+6e48-6e49, U+6e4b-6e4f, U+6e51-6e54, U+6e57, U+6e5b-6e5f, U+6e62-6e63, U+6e68, U+6e6b, U+6e6e, U+6e72-6e73, U+6e76, U+6e7b, U+6e7d, U+6e82, U+6e89, U+6e8c-6e8d, U+6e8f, U+6e93, U+6e98-6e99, U+6e9f-6ea0, U+6ea5, U+6ea7, U+6eaa-6eab, U+6ead-6eaf, U+6eb1-6eb4, U+6eb7, U+6ebb-6ebd, U+6ebf-6ec4, U+6ec7-6eca, U+6ecc-6ecf, U+6ed3-6ed5, U+6ed9-6edb, U+6ee6, U+6eeb-6eef, U+6ef7-6ef9, U+6efb, U+6efd-6eff, U+6f04, U+6f08-6f0a, U+6f0c-6f0d, U+6f10-6f11, U+6f13, U+6f15-6f16, U+6f18, U+6f1a-6f1b, U+6f25-6f26, U+6f29-6f2a, U+6f2d, U+6f2f-6f33, U+6f35-6f36, U+6f38, U+6f3b-6f3c, U+6f3e-6f3f, U+6f41, U+6f45, U+6f4f, U+6f51-6f53, U+6f57-6f5b;
    }
    /* [33] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.33.woff2) format('woff2');
      unicode-range: U+6b9b, U+6b9e-6ba0, U+6ba2-6ba4, U+6ba8-6bb3, U+6bb7-6bb9, U+6bbc-6bbe, U+6bc0, U+6bc3-6bc4, U+6bc6-6bc9, U+6bcb-6bcc, U+6bcf, U+6bd3, U+6bd6-6bd8, U+6bda, U+6bdf, U+6be1, U+6be3, U+6be6-6be7, U+6beb-6bec, U+6bee, U+6bf1, U+6bf3, U+6bf7, U+6bf9, U+6bff, U+6c02, U+6c04-6c05, U+6c08-6c0a, U+6c0d-6c0e, U+6c10, U+6c12-6c14, U+6c19, U+6c1b, U+6c1f, U+6c24, U+6c26-6c28, U+6c2c, U+6c2e, U+6c33, U+6c35-6c36, U+6c3a-6c3b, U+6c3e-6c40, U+6c4a-6c4b, U+6c4d, U+6c4f, U+6c52, U+6c54-6c55, U+6c59, U+6c5b-6c5e, U+6c62, U+6c67-6c68, U+6c6a-6c6b, U+6c6d, U+6c6f, U+6c73-6c74, U+6c76, U+6c78-6c79, U+6c7b, U+6c7e, U+6c81-6c87, U+6c89, U+6c8c-6c8d, U+6c90, U+6c92-6c95, U+6c97-6c98, U+6c9a-6c9c, U+6c9f, U+6caa-6cae, U+6cb0-6cb2, U+6cb4, U+6cba, U+6cbd-6cbe, U+6cc2, U+6cc5-6cc6, U+6ccd, U+6ccf-6cd4, U+6cd6-6cd7, U+6cd9-6cdd, U+6ce0, U+6ce7, U+6ce9-6cef, U+6cf1-6cf2, U+6cf4, U+6cfb, U+6d00-6d01, U+6d04, U+6d07, U+6d0a, U+6d0c, U+6d0e-6d0f, U+6d11, U+6d13, U+6d19-6d1a, U+6d1f, U+6d24, U+6d26-6d28, U+6d2b, U+6d2e-6d2f, U+6d31, U+6d33-6d36, U+6d38-6d39, U+6d3c-6d3d, U+6d3f, U+6d57-6d5b, U+6d5e-6d61, U+6d64-6d65, U+6d67, U+6d6c, U+6d6f-6d70, U+6d79, U+6d7c, U+6d80-6d82, U+6d85;
    }
    /* [34] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.34.woff2) format('woff2');
      unicode-range: U+69e9-69eb, U+69ed-69ef, U+69f1-69f6, U+69f9, U+69fe-6a01, U+6a03, U+6a05, U+6a0a, U+6a0c, U+6a0f, U+6a11-6a15, U+6a17, U+6a1a-6a1b, U+6a1d-6a20, U+6a22-6a24, U+6a28, U+6a2e, U+6a30, U+6a32-6a38, U+6a3b, U+6a3e-6a3f, U+6a44-6a4a, U+6a4e, U+6a50-6a52, U+6a54-6a56, U+6a5b, U+6a61-6a62, U+6a64, U+6a66-6a67, U+6a6a-6a6b, U+6a71-6a73, U+6a78, U+6a7a, U+6a7e-6a7f, U+6a81, U+6a83-6a84, U+6a86-6a87, U+6a89, U+6a8b, U+6a8d, U+6a90-6a91, U+6a94, U+6a97, U+6a9b, U+6a9d-6aa3, U+6aa5, U+6aaa-6aac, U+6aae-6ab1, U+6ab3-6ab4, U+6ab8, U+6abb, U+6abd-6abf, U+6ac1-6ac3, U+6ac6, U+6ac8-6ac9, U+6acc, U+6ad0-6ad1, U+6ad3-6ad6, U+6ada-6adf, U+6ae2, U+6ae4, U+6ae7-6ae8, U+6aea, U+6aec, U+6af0-6af3, U+6af8, U+6afa, U+6afc-6afd, U+6b02-6b03, U+6b06-6b07, U+6b09-6b0b, U+6b0f-6b12, U+6b16-6b17, U+6b1b, U+6b1d-6b1f, U+6b23-6b24, U+6b28, U+6b2b-6b2c, U+6b2f, U+6b35-6b39, U+6b3b, U+6b3d, U+6b3f, U+6b43, U+6b46-6b47, U+6b49-6b4a, U+6b4d-6b4e, U+6b50, U+6b52, U+6b54, U+6b56, U+6b58-6b59, U+6b5b, U+6b5d, U+6b5f-6b61, U+6b65, U+6b67, U+6b6b-6b6c, U+6b6e, U+6b70, U+6b72, U+6b75, U+6b77-6b7a, U+6b7d-6b85, U+6b89, U+6b8d, U+6b95, U+6b97-6b98;
    }
    /* [35] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.35.woff2) format('woff2');
      unicode-range: U+6867, U+686b, U+686e-6872, U+6874-6875, U+6877, U+6879-687c, U+687e-687f, U+6882-6884, U+6886, U+6888, U+688d-6890, U+6894, U+6896, U+6898-689c, U+689f-68a3, U+68a5-68a7, U+68a9-68ab, U+68ad-68af, U+68b2-68b5, U+68b9-68bc, U+68c3, U+68c5-68c6, U+68c8-68ca, U+68cc-68cd, U+68cf-68d1, U+68d3-68d9, U+68dc-68dd, U+68e0-68e1, U+68e3-68e5, U+68e7-68e8, U+68ea-68ed, U+68ef-68f1, U+68f5-68f7, U+68f9, U+68fb-68fd, U+6900-6901, U+6903-6904, U+6906-690c, U+690f-6911, U+6913, U+6916-6917, U+6919-691b, U+6921-6923, U+6925-6926, U+6928, U+692a, U+6930-6931, U+6933-6936, U+6938-6939, U+693b, U+693d, U+6942, U+6945-6946, U+6949, U+694e, U+6954, U+6957, U+6959, U+695b-695e, U+6961-6966, U+6968-696c, U+696e-6974, U+6977-697b, U+697e-6981, U+6986, U+698d, U+6991-6992, U+6994-6996, U+6998, U+699c, U+69a0-69a1, U+69a5-69a8, U+69ab, U+69ad, U+69af-69b2, U+69b4, U+69b7-69b8, U+69ba-69bc, U+69be-69c1, U+69c3, U+69c5, U+69c7-69c8, U+69ca, U+69ce-69d1, U+69d3, U+69d6-69d7, U+69d9, U+69dd-69de, U+69e2-69e3, U+69e5, U+69e7-69e8;
    }
    /* [36] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.36.woff2) format('woff2');
      unicode-range: U+668c-668e, U+6690, U+6692, U+6698-669d, U+669f-66a0, U+66a2, U+66a4, U+66ad, U+66b1-66b3, U+66b5, U+66b8-66b9, U+66bb-66bc, U+66be-66c4, U+66c6, U+66c8-66c9, U+66cc, U+66ce-66cf, U+66d4, U+66da-66db, U+66dd, U+66df-66e0, U+66e6, U+66e8-66e9, U+66eb-66ec, U+66ee, U+66f5, U+66f7, U+66fa-66fc, U+6701, U+6705, U+6707, U+670e-670f, U+6712-6716, U+6719, U+671c, U+671e, U+6720, U+6722, U+6725-6726, U+672e, U+6733, U+6735-6738, U+673e-673f, U+6741, U+6743, U+6745-6748, U+674c-674d, U+6753-6755, U+6759, U+675d-675e, U+6760, U+6762-6764, U+6766, U+676a, U+676c, U+676e, U+6770, U+6772-6774, U+6776-6777, U+677b-677c, U+6780-6781, U+6784-6785, U+6787, U+6789, U+678b-678c, U+678e-678f, U+6791-6793, U+6796, U+6798-6799, U+679b, U+67a1, U+67a4, U+67a6, U+67a9, U+67b0-67b5, U+67b7-67b9, U+67bb-67be, U+67c0-67c3, U+67c5-67c6, U+67c8-67c9, U+67ce, U+67d2, U+67d7-67d9, U+67db-67de, U+67e1-67e2, U+67e4, U+67e6-67e7, U+67e9, U+67ec, U+67ee-67f0, U+67f2, U+67f6-67f7, U+67f9-67fa, U+67fc, U+67fe, U+6801-6802, U+6805, U+6810, U+6814, U+6818-6819, U+681d, U+681f, U+6822, U+6827-6829, U+682b-682d, U+682f-6834, U+683b, U+683e-6840, U+6844-6846, U+6849-684a, U+684c-684e, U+6852-6855, U+6857-6859, U+685b, U+685d, U+685f, U+6863;
    }
    /* [37] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.37.woff2) format('woff2');
      unicode-range: U+64e3-64e5, U+64e7, U+64e9-64ea, U+64ed, U+64ef-64f2, U+64f4-64f7, U+64fa-64fb, U+64fd-6501, U+6504-6505, U+6508-650a, U+650f, U+6513-6514, U+6516, U+6518-6519, U+651b-651f, U+6522, U+6524, U+6526, U+6529-652c, U+652e, U+6531-6532, U+6534-6538, U+653a, U+653c-653d, U+6543-6544, U+6547-6549, U+654d-654e, U+6550, U+6552, U+6554-6556, U+6558, U+655d-6560, U+6567, U+656b, U+6572, U+6578, U+657a, U+657d, U+6581-6585, U+6588, U+658a, U+658c, U+6592, U+6595, U+6598, U+659b, U+659d, U+659f-65a1, U+65a3-65a6, U+65ab, U+65ae, U+65b2-65b5, U+65b7-65b8, U+65be-65bf, U+65c1-65c4, U+65c6, U+65c8-65c9, U+65cc, U+65ce, U+65d0, U+65d2, U+65d4, U+65d6, U+65d8-65d9, U+65db, U+65df-65e1, U+65e3, U+65f0-65f2, U+65f4-65f5, U+65f9, U+65fb-65fc, U+65fe-6600, U+6603-6604, U+6608-660a, U+660d, U+6611-6612, U+6615-6616, U+661c-661e, U+6621-6624, U+6626, U+6629-662c, U+662e, U+6630-6631, U+6633-6637, U+6639-663b, U+663f-6641, U+6644-6646, U+6648-664a, U+664c, U+664e-664f, U+6651, U+6657-6665, U+6667-6668, U+666a-666d, U+6670, U+6673, U+6675, U+6677-6679, U+667b-667c, U+667e-6680, U+6683-6684, U+6688, U+668b;
    }
    /* [38] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.38.woff2) format('woff2');
      unicode-range: U+62ef, U+62f1-62f2, U+62f4-62f5, U+62fc-62fd, U+62ff, U+6302-6304, U+6308-630d, U+6310, U+6313, U+6316, U+6318, U+631b, U+6327, U+6329-632a, U+632d, U+6332, U+6335-6336, U+6339-633c, U+633e, U+6341-6344, U+6346, U+634a-634e, U+6350, U+6352-6354, U+6358-6359, U+635b, U+6365-6366, U+6369, U+636b-636d, U+6371-6372, U+6374-6378, U+637a, U+637c-637d, U+637f-6380, U+6382, U+6384, U+6387, U+6389-638a, U+638e-6390, U+6394-6396, U+6399-639a, U+639e, U+63a0, U+63a3-63a4, U+63a6, U+63a9, U+63ab-63af, U+63b5, U+63bd-63be, U+63c0-63c1, U+63c4-63c6, U+63c8, U+63ce, U+63d1-63d6, U+63dc, U+63e0, U+63e3, U+63e5, U+63e9-63ed, U+63f2-63f3, U+63f5-63f9, U+6406, U+6409-640a, U+640f-6410, U+6412-6414, U+6416-6418, U+641e, U+6420, U+6422, U+6424-6426, U+6428-642a, U+642f-6430, U+6434-6436, U+643d, U+643f, U+644b, U+644e-644f, U+6451-6454, U+645a-645d, U+645f-6461, U+6463, U+6467, U+646d, U+6473-6474, U+6476, U+6478-6479, U+647b, U+647d, U+6485, U+6487-6488, U+648f-6491, U+6493, U+6495, U+6498-649b, U+649d-649f, U+64a1, U+64a3, U+64a6, U+64a8-64a9, U+64ac, U+64b3, U+64bb-64bf, U+64c2, U+64c4-64c5, U+64c7, U+64c9-64cc, U+64ce, U+64d0-64d2, U+64d4-64d5, U+64d7-64d8, U+64da, U+64e0-64e1;
    }
    /* [39] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.39.woff2) format('woff2');
      unicode-range: U+612b-612c, U+6130-6131, U+6134-6137, U+6139-613a, U+613c-613f, U+6141-6142, U+6144-6147, U+6149-614a, U+614d, U+6153, U+6158-615a, U+615d-6160, U+6164-6165, U+616b-616c, U+616f, U+6171-6175, U+6177-6178, U+617b-6181, U+6183-6184, U+6187, U+618a-618b, U+618d, U+6192-6194, U+6196-619a, U+619c-619d, U+619f-61a0, U+61a5, U+61a8, U+61aa-61ae, U+61b8-61ba, U+61bc, U+61be, U+61c0-61c3, U+61c6, U+61c8, U+61ca-61cf, U+61d5, U+61dc-61df, U+61e1-61e3, U+61e5-61e9, U+61ec-61ed, U+61ef, U+61f4-61f7, U+61fa, U+61fc-6201, U+6203-6204, U+6207-620a, U+620d-620e, U+6213-6215, U+621b-621e, U+6220-6223, U+6227, U+6229-622b, U+622e, U+6230-6233, U+6236, U+6239, U+623d-623e, U+6241-6244, U+6246, U+6248, U+624c, U+624e, U+6250-6252, U+6254, U+6256, U+6258, U+625a-625c, U+625e, U+6260-6261, U+6263-6264, U+6268, U+626d, U+626f, U+6273, U+627a-627e, U+6282-6283, U+6285, U+6289, U+628d-6290, U+6292-6294, U+6296, U+6299, U+629b, U+62a6, U+62a8, U+62ac, U+62b3, U+62b6-62b7, U+62ba-62bb, U+62be-62bf, U+62c2, U+62c4, U+62c6-62c8, U+62ca, U+62ce-62cf, U+62d1, U+62d4-62d6, U+62da, U+62dc, U+62ea, U+62ee;
    }
    /* [40] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.40.woff2) format('woff2');
      unicode-range: U+5f7f, U+5f82-5f83, U+5f87-5f89, U+5f8d, U+5f8f, U+5f91, U+5f96, U+5f99, U+5f9c-5f9d, U+5fa0, U+5fa2, U+5fa4, U+5fa7-5fa8, U+5fab-5fad, U+5faf-5fb1, U+5fb5, U+5fb7-5fb8, U+5fbc-5fbd, U+5fc4, U+5fc7-5fc9, U+5fcb, U+5fd0-5fd4, U+5fdd-5fde, U+5fe1-5fe2, U+5fe4, U+5fe8-5fea, U+5fec-5ff3, U+5ff6, U+5ff8, U+5ffa-5ffd, U+5fff, U+6007, U+600a, U+600d-6010, U+6013-6015, U+6017-601b, U+601f, U+6021-6022, U+6024, U+6026, U+6029, U+602b, U+602d, U+6031, U+6033, U+6035, U+603a, U+6040-6043, U+6046-604a, U+604c-604d, U+6051, U+6054-6057, U+6059-605a, U+605d, U+605f-6064, U+6067, U+606a-606c, U+6070-6071, U+6077, U+607e-607f, U+6081-6086, U+6088-608e, U+6091-6093, U+6095-6098, U+609a-609b, U+609d-609e, U+60a2, U+60a4-60a5, U+60a7-60a8, U+60b0-60b1, U+60b3-60b5, U+60b7-60b8, U+60bb, U+60bd-60be, U+60c2, U+60c4, U+60c6-60cb, U+60ce-60cf, U+60d3-60d5, U+60d8-60d9, U+60db, U+60dd-60df, U+60e1-60e2, U+60e5, U+60ee, U+60f0-60f2, U+60f4-60f8, U+60fa-60fd, U+6100, U+6102-6103, U+6106-6108, U+610a, U+610c-610e, U+6110-6114, U+6116-6117, U+6119, U+611c, U+611e, U+6120-6122, U+6127-6128, U+612a;
    }
    /* [41] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.41.woff2) format('woff2');
      unicode-range: U+5db4, U+5db7-5db9, U+5dbc-5dbd, U+5dc3, U+5dc7, U+5dc9, U+5dcb-5dce, U+5dd0-5dd3, U+5dd6-5dd9, U+5ddb, U+5de0, U+5de2, U+5de4, U+5de9, U+5df2, U+5df5, U+5df8-5df9, U+5dfd, U+5dff-5e00, U+5e07, U+5e0b, U+5e0d, U+5e11-5e12, U+5e14-5e15, U+5e18-5e1b, U+5e1f-5e20, U+5e25, U+5e28, U+5e2e, U+5e32, U+5e35-5e37, U+5e3e, U+5e40, U+5e43-5e44, U+5e47, U+5e49, U+5e4b, U+5e4e, U+5e50-5e51, U+5e54, U+5e56-5e58, U+5e5b-5e5c, U+5e5e-5e5f, U+5e62, U+5e64, U+5e68, U+5e6a-5e6e, U+5e70, U+5e75-5e77, U+5e7a, U+5e7f-5e80, U+5e87, U+5e8b, U+5e8e, U+5e96, U+5e99-5e9a, U+5ea0, U+5ea2, U+5ea4-5ea5, U+5ea8, U+5eaa, U+5eac, U+5eb1, U+5eb3, U+5eb8-5eb9, U+5ebd-5ebf, U+5ec1-5ec2, U+5ec6, U+5ec8, U+5ecb-5ecc, U+5ece-5ed6, U+5ed9-5ee2, U+5ee5, U+5ee8-5ee9, U+5eeb-5eec, U+5ef0-5ef1, U+5ef3-5ef4, U+5ef8-5ef9, U+5efc-5f00, U+5f02-5f03, U+5f06-5f09, U+5f0b-5f0e, U+5f11, U+5f16-5f17, U+5f19, U+5f1b-5f1e, U+5f21-5f24, U+5f27-5f29, U+5f2b-5f30, U+5f34, U+5f36, U+5f38, U+5f3a-5f3d, U+5f3f-5f41, U+5f44-5f45, U+5f47-5f48, U+5f4a, U+5f4c-5f4e, U+5f50-5f51, U+5f54, U+5f56-5f58, U+5f5b-5f5d, U+5f60, U+5f63-5f65, U+5f67, U+5f6a, U+5f6c-5f6d, U+5f6f, U+5f72-5f75, U+5f78, U+5f7a, U+5f7d-5f7e;
    }
    /* [42] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.42.woff2) format('woff2');
      unicode-range: U+5bd7-5bda, U+5bde, U+5be0-5be2, U+5be4-5be6, U+5be8, U+5beb-5bec, U+5bef-5bf1, U+5bf3-5bf6, U+5bfd, U+5c03, U+5c05, U+5c07-5c09, U+5c0c-5c0d, U+5c12-5c14, U+5c17, U+5c19, U+5c1e-5c20, U+5c22-5c24, U+5c26, U+5c28-5c2e, U+5c30, U+5c32, U+5c35-5c36, U+5c38-5c39, U+5c46, U+5c4d-5c50, U+5c53, U+5c59-5c5c, U+5c5f-5c63, U+5c67-5c69, U+5c6c-5c70, U+5c74-5c76, U+5c79-5c7d, U+5c87-5c88, U+5c8a, U+5c8c, U+5c8f, U+5c91-5c92, U+5c94, U+5c9d, U+5c9f-5ca0, U+5ca2-5ca3, U+5ca6-5ca8, U+5caa-5cab, U+5cad, U+5cb1-5cb2, U+5cb4-5cb7, U+5cba-5cbc, U+5cbe, U+5cc5, U+5cc7, U+5cc9, U+5ccb, U+5cd0, U+5cd2, U+5cd7, U+5cd9, U+5cdd, U+5ce6, U+5ce8-5cea, U+5ced-5cee, U+5cf1-5cf2, U+5cf4-5cf5, U+5cfa-5cfb, U+5cfd, U+5d01, U+5d06, U+5d0b, U+5d0d, U+5d10-5d12, U+5d14-5d15, U+5d17-5d1b, U+5d1d, U+5d1f-5d20, U+5d22-5d24, U+5d26-5d27, U+5d2b, U+5d31, U+5d34, U+5d39, U+5d3d, U+5d3f, U+5d42-5d43, U+5d46-5d48, U+5d4a-5d4b, U+5d4e, U+5d51-5d53, U+5d55, U+5d59, U+5d5c, U+5d5f-5d62, U+5d64, U+5d69-5d6a, U+5d6c-5d6d, U+5d6f-5d70, U+5d73, U+5d76, U+5d79-5d7a, U+5d7e-5d7f, U+5d81-5d84, U+5d87-5d88, U+5d8a, U+5d8c, U+5d90, U+5d92-5d95, U+5d97, U+5d99, U+5d9b, U+5d9d, U+5d9f-5da0, U+5da2, U+5da4, U+5da7, U+5dab-5dac, U+5dae, U+5db0, U+5db2;
    }
    /* [43] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.43.woff2) format('woff2');
      unicode-range: U+59ae-59b0, U+59b2-59b3, U+59b7, U+59ba, U+59bc, U+59be, U+59c1, U+59c3-59c4, U+59c6, U+59c8, U+59ca, U+59cd, U+59d2, U+59d9-59da, U+59dd-59df, U+59e3-59e5, U+59e7-59e8, U+59ec, U+59ee-59ef, U+59f1-59f2, U+59f4, U+59f6-59f8, U+5a00, U+5a03-5a04, U+5a09, U+5a0c-5a0e, U+5a11-5a13, U+5a17, U+5a1a-5a1c, U+5a1e-5a1f, U+5a23-5a25, U+5a27-5a28, U+5a2a, U+5a2d, U+5a30, U+5a35-5a36, U+5a40-5a41, U+5a44-5a45, U+5a47-5a49, U+5a4c, U+5a50, U+5a55, U+5a5e, U+5a62-5a63, U+5a65, U+5a67, U+5a6a, U+5a6c-5a6d, U+5a77, U+5a7a-5a7b, U+5a7e, U+5a84, U+5a8b, U+5a90, U+5a93, U+5a96, U+5a99, U+5a9c, U+5a9e-5aa0, U+5aa2, U+5aa7, U+5aac, U+5ab1-5ab3, U+5ab5, U+5ab8, U+5aba-5abf, U+5ac2, U+5ac4, U+5ac6, U+5ac8, U+5acb, U+5acf-5ad0, U+5ad6-5ad7, U+5ada, U+5adc, U+5ae0-5ae1, U+5ae3, U+5ae5-5ae6, U+5ae9-5aea, U+5aee, U+5af0, U+5af5-5af6, U+5afa-5afb, U+5afd, U+5b00-5b01, U+5b08, U+5b0b, U+5b16-5b17, U+5b19, U+5b1b, U+5b1d, U+5b21, U+5b25, U+5b2a, U+5b2c-5b2d, U+5b30, U+5b32, U+5b34, U+5b36, U+5b38, U+5b3e, U+5b40-5b41, U+5b43, U+5b45, U+5b4b-5b4c, U+5b51-5b52, U+5b56, U+5b5a-5b5c, U+5b5e-5b5f, U+5b65, U+5b68-5b69, U+5b6e-5b71, U+5b73, U+5b75-5b76, U+5b7a, U+5b7c-5b84, U+5b86, U+5b8a-5b8b, U+5b8d-5b8e, U+5b90-5b91, U+5b93-5b94, U+5b96, U+5ba5-5ba6, U+5ba8-5ba9, U+5bac-5bad, U+5baf, U+5bb1-5bb2, U+5bb7-5bb8, U+5bba, U+5bbc, U+5bc0-5bc1, U+5bc3, U+5bc7, U+5bc9, U+5bcd-5bd0, U+5bd3-5bd4, U+5bd6;
    }
    /* [44] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.44.woff2) format('woff2');
      unicode-range: U+57d7, U+57dc-57de, U+57e0-57e1, U+57e3-57e4, U+57e6-57e7, U+57e9, U+57ed, U+57f0, U+57f4-57f6, U+57f8, U+57fb, U+57fd-57ff, U+5803-5804, U+5808-580d, U+5819, U+581b, U+581d-5821, U+5826-5827, U+582d, U+582f-5830, U+5832, U+5835, U+5839, U+583d, U+583f-5840, U+5849, U+584b-584d, U+584f-5852, U+5855, U+5858-5859, U+585f, U+5861-5862, U+5864, U+5867-5868, U+586d, U+5870, U+5872, U+5878-5879, U+587c, U+587f-5881, U+5885, U+5887-588d, U+588f-5890, U+5894, U+5896, U+5898, U+589d-589e, U+58a0-58a2, U+58a6, U+58a9-58ab, U+58ae, U+58b1-58b3, U+58b8-58bc, U+58be, U+58c2-58c5, U+58c8, U+58cd-58ce, U+58d0-58da, U+58dc-58e2, U+58e4-58e5, U+58e9, U+58ec, U+58ef, U+58f3-58f4, U+58f7, U+58f9, U+58fb-58fd, U+5902, U+5905-5906, U+590a-590d, U+5910, U+5912-5914, U+5918-5919, U+591b, U+591d, U+591f, U+5921, U+5923-5925, U+5928, U+592c-592d, U+592f-5930, U+5932-5933, U+5935-5936, U+5938-5939, U+593d-593f, U+5943, U+5946, U+594e, U+5950, U+5952-5953, U+5955, U+5957-595b, U+595d-5961, U+5963, U+5967, U+5969, U+596b-596d, U+596f, U+5972, U+5975-5976, U+5978-5979, U+597b-597c, U+5981, U+598b-598e, U+5992, U+5995, U+5997, U+599b, U+599d, U+599f, U+59a3-59a4, U+59a7, U+59ad;
    }
    /* [45] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.45.woff2) format('woff2');
      unicode-range: U+5638-5639, U+563b-563d, U+563f-5641, U+5643-5644, U+5646-5647, U+5649, U+564b, U+564d-5650, U+5653-5654, U+565e, U+5660-5664, U+5666, U+5669-566d, U+566f, U+5671-5672, U+5675-5676, U+5678, U+567a, U+5680, U+5684-5688, U+568a-568c, U+568f, U+5694-5695, U+5699-569a, U+569d-56a0, U+56a5-56a9, U+56ab-56ae, U+56b1-56b4, U+56b6-56b7, U+56bc, U+56be, U+56c0, U+56c2-56c3, U+56c5, U+56c8-56d1, U+56d3, U+56d7-56d9, U+56dc-56dd, U+56df, U+56e1, U+56e4-56e8, U+56eb, U+56ed-56ee, U+56f1, U+56f6-56f7, U+56f9, U+56ff-5704, U+5707-570a, U+570c-570d, U+5711, U+5713, U+5715-5716, U+5718, U+571a-571d, U+5720-5726, U+5729-572a, U+572c, U+572e-572f, U+5733-5734, U+5737-5738, U+573b, U+573d-573f, U+5745-5746, U+574c-574f, U+5751-5752, U+5759, U+575f, U+5761-5762, U+5764-5765, U+5767-5769, U+576b, U+576d-5771, U+5773-5775, U+5777, U+5779-577c, U+577e-577f, U+5781, U+5783, U+5788-5789, U+578c, U+5793-5795, U+5797, U+5799-579a, U+579c-57a1, U+57a4, U+57a7-57aa, U+57ac, U+57ae, U+57b0, U+57b3, U+57b8, U+57bd, U+57c0, U+57c3, U+57c6-57c8, U+57cc, U+57cf, U+57d2-57d6;
    }
    /* [46] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.46.woff2) format('woff2');
      unicode-range: U+546c-546e, U+5470-5471, U+5474-5477, U+547b, U+547f-5481, U+5483-5486, U+5488-548b, U+548d-5492, U+5495-5496, U+549c, U+549f-54a2, U+54a4, U+54a6-54af, U+54b1, U+54b7-54bc, U+54be-54bf, U+54c2-54c4, U+54c6-54c8, U+54ca, U+54cd-54ce, U+54d8, U+54e0, U+54e2, U+54e5-54e6, U+54e8-54ea, U+54ec-54ef, U+54f1, U+54f3, U+54f6, U+54fc-5501, U+5505, U+5508-5509, U+550c-550f, U+5514-5516, U+5527, U+552a-552b, U+552e, U+5532-5533, U+5535-5536, U+5538-5539, U+553b-553d, U+5540-5541, U+5544-5545, U+5547, U+5549-554a, U+554c-554d, U+5550-5551, U+5556-5558, U+555a-555e, U+5560-5561, U+5563-5564, U+5566, U+557b-5583, U+5586-5588, U+558a, U+558e-558f, U+5591-5594, U+5597, U+5599, U+559e-559f, U+55a3-55a4, U+55a8-55a9, U+55ac-55ae, U+55b2, U+55bf, U+55c1, U+55c3-55c4, U+55c6-55c7, U+55c9, U+55cb-55cc, U+55ce, U+55d1-55d4, U+55d7-55d8, U+55da-55db, U+55dd-55df, U+55e2, U+55e4, U+55e9, U+55ec, U+55ee, U+55f1, U+55f6-55f9, U+55fd-55ff, U+5605, U+5607-5608, U+560a, U+560d-5612, U+5616-5617, U+5619, U+561b, U+5620, U+5628, U+562c, U+562f-5637;
    }
    /* [47] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.47.woff2) format('woff2');
      unicode-range: U+52af-52b0, U+52b5-52b8, U+52ba-52be, U+52c0-52c1, U+52c4-52c6, U+52c8, U+52ca, U+52cc-52cd, U+52cf-52d2, U+52d4, U+52d6-52d7, U+52db-52dc, U+52de, U+52e0-52e1, U+52e3, U+52e5-52e6, U+52e8-52ea, U+52ec, U+52f0-52f1, U+52f3-52fb, U+5300-5301, U+5303, U+5306-5308, U+530a-530d, U+530f-5311, U+5313, U+5315, U+5318-531f, U+5321, U+5323-5325, U+5327-532d, U+532f-5333, U+5335, U+5338, U+533c-533e, U+5340, U+5342, U+5345-5346, U+5349, U+534b-534c, U+5359, U+535b, U+535e, U+5361, U+5363-5367, U+5369, U+536c-536e, U+5372, U+5377, U+5379-537b, U+537d-537f, U+5382-5383, U+5387-5389, U+538e, U+5393-5394, U+5396, U+5398-5399, U+539d, U+53a0-53a1, U+53a4-53a6, U+53a9-53ab, U+53ad-53b0, U+53b2, U+53b4-53b8, U+53ba, U+53bd, U+53c0-53c1, U+53c3-53c5, U+53cf, U+53d2-53d3, U+53d5, U+53da-53db, U+53dd-53e0, U+53e2, U+53e6-53e8, U+53ed-53ee, U+53f4-53f5, U+53fa, U+5401-5403, U+540b, U+540f, U+5412-5413, U+541a, U+541d-541e, U+5421, U+5424, U+5427-542a, U+542c-542f, U+5431, U+5433-5436, U+543c-543d, U+543f-5440, U+5443-5444, U+5447, U+544c-544f, U+5455, U+545e, U+5462, U+5464, U+5466-5467, U+5469, U+546b;
    }
    /* [48] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.48.woff2) format('woff2');
      unicode-range: U+50f5-50f6, U+50f9-50fb, U+50fe, U+5101-5103, U+5106-5109, U+510b-510e, U+5110, U+5112, U+5114-511e, U+5121, U+5123, U+5127-5128, U+512c-512d, U+512f, U+5131, U+5133-5135, U+5137-513c, U+513f-5142, U+5147, U+514a, U+514c, U+514f, U+5152-5155, U+5157-5158, U+515f-5160, U+5162, U+5164, U+5166-5167, U+5169-516a, U+516e, U+5173-5174, U+5179, U+517b, U+517e, U+5180, U+5182-5184, U+5189, U+518b-518c, U+518e-5191, U+5193, U+5195-5196, U+5198, U+519d, U+51a1-51a4, U+51a6, U+51a9-51ab, U+51ad, U+51b0-51b3, U+51b5, U+51b8, U+51ba, U+51bc-51bf, U+51c2-51c3, U+51c5, U+51c8-51cb, U+51cf, U+51d1-51d6, U+51d8, U+51de-51e0, U+51e2, U+51e5, U+51e7, U+51e9, U+51ec-51ee, U+51f2-51f5, U+51f7, U+51fe, U+5201-5202, U+5204-5205, U+520b, U+520e, U+5212-5216, U+5218, U+5222, U+5226-5228, U+522a-522b, U+522e, U+5231-5233, U+5235, U+523c, U+5244-5245, U+5249, U+524b-524c, U+524f, U+5254-5255, U+5257-5258, U+525a, U+525c-5261, U+5266, U+5269, U+526c, U+526e, U+5271, U+5273-5274, U+5277-5279, U+527d, U+527f-5280, U+5282-5285, U+5288-528a, U+528c-528d, U+5291-5298, U+529a, U+529c, U+52a4-52a7, U+52ab-52ad;
    }
    /* [49] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.49.woff2) format('woff2');
      unicode-range: U+4f7a-4f7e, U+4f81-4f85, U+4f88-4f8a, U+4f8c, U+4f8e-4f90, U+4f92-4f94, U+4f96-4f9a, U+4f9e-4fa0, U+4fab, U+4fad, U+4faf, U+4fb2, U+4fb7, U+4fb9, U+4fbb-4fbe, U+4fc0-4fc1, U+4fc4-4fc6, U+4fc8-4fc9, U+4fcb-4fd4, U+4fd8, U+4fda-4fdc, U+4fdf-4fe0, U+4fe2, U+4fe4-4fe6, U+4fef-4ff2, U+4ff6, U+4ffc-5002, U+5004-5007, U+500a, U+500c, U+500e-5011, U+5013-5014, U+5016-5018, U+501a-501e, U+5021-5023, U+5025-502a, U+502c-502e, U+5030, U+5032-5033, U+5035, U+5039, U+503b, U+5040-5043, U+5045-5048, U+504a, U+504c, U+504e, U+5050-5053, U+5055-5057, U+5059-505a, U+505f-5060, U+5062-5063, U+5066-5067, U+506a, U+506c-506d, U+5070-5072, U+5077-5078, U+5080-5081, U+5083-5086, U+5088, U+508a, U+508e-5090, U+5092-5096, U+509a-509c, U+509e-50a3, U+50aa, U+50ad, U+50af-50b4, U+50b9-50bb, U+50bd, U+50c0, U+50c2-50c4, U+50c7, U+50c9-50ca, U+50cc, U+50ce, U+50d0-50d1, U+50d3-50d4, U+50d6, U+50d8-50d9, U+50dc-50df, U+50e1-50e6, U+50e8-50e9, U+50ed-50f4;
    }
    /* [50] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.50.woff2) format('woff2');
      unicode-range: U+43ee, U+43f0, U+4408, U+440c, U+4417, U+441c, U+4422, U+4453, U+445b, U+4476, U+447a, U+4491, U+44b3, U+44be, U+44d4, U+4508, U+450d, U+4525, U+4543, U+457a, U+459d, U+45b8, U+45be, U+45e5, U+45ea, U+460f-4610, U+4641, U+4665, U+46a1, U+46ae-46af, U+470c, U+471f, U+4764, U+47e6, U+47fd, U+4816, U+481e, U+4844, U+484e, U+48b5, U+49b0, U+49e7, U+49fa, U+4a04, U+4a29, U+4abc, U+4b38, U+4b3b, U+4b7e, U+4bc2, U+4bca, U+4bd2, U+4be8, U+4c17, U+4c20, U+4c38, U+4cc4, U+4cd1, U+4ce1, U+4d07, U+4d77, U+4e02, U+4e04-4e05, U+4e0c, U+4e0f-4e12, U+4e15, U+4e17, U+4e19, U+4e1e-4e1f, U+4e23-4e24, U+4e28-4e2c, U+4e2e-4e31, U+4e35-4e37, U+4e3f-4e42, U+4e44, U+4e47-4e48, U+4e4d-4e4e, U+4e51, U+4e55-4e56, U+4e58, U+4e5a-4e5c, U+4e62-4e63, U+4e68-4e69, U+4e74-4e75, U+4e79, U+4e7f, U+4e82, U+4e85, U+4e8a, U+4e8d-4e8e, U+4e96-4e99, U+4e9d-4ea0, U+4ea2, U+4ea5-4ea6, U+4ea8, U+4eaf-4eb0, U+4eb3, U+4eb6, U+4eb9, U+4ebb-4ebc, U+4ec2-4ec4, U+4ec6-4ec8, U+4ecd, U+4ed0, U+4ed7, U+4eda-4edb, U+4edd-4ee2, U+4ee8, U+4eeb, U+4eed, U+4eef, U+4ef1, U+4ef3, U+4ef5, U+4ef7, U+4efc-4f00, U+4f02-4f03, U+4f08-4f09, U+4f0b-4f0d, U+4f12, U+4f15-4f17, U+4f19, U+4f1c, U+4f2b, U+4f2e, U+4f30-4f31, U+4f33, U+4f35-4f37, U+4f39, U+4f3b, U+4f3e, U+4f40, U+4f42-4f43, U+4f48-4f49, U+4f4b-4f4c, U+4f52, U+4f54, U+4f56-4f58, U+4f5a-4f5b, U+4f5d-4f5f, U+4f63-4f64, U+4f69-4f6a, U+4f6c, U+4f6e-4f71, U+4f76-4f79;
    }
    /* [53] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.53.woff2) format('woff2');
      unicode-range: U+31de-31e3, U+31f0-321e, U+3220-3230, U+3232-32c9;
    }
    /* [54] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.54.woff2) format('woff2');
      unicode-range: U+303c-303f, U+3094-3096, U+309f-30a0, U+30ee, U+30f7-30fa, U+30ff, U+3105-312d, U+3131-3163, U+3165-318e, U+3190-31ba, U+31c0-31dd;
    }
    /* [55] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.55.woff2) format('woff2');
      unicode-range: U+2f29-2fd5, U+2ff0-2ffb, U+3004, U+3013, U+3016-301b, U+301e, U+3020-303b;
    }
    /* [56] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.56.woff2) format('woff2');
      unicode-range: U+25e5-25e6, U+2601-2603, U+2609, U+260e-260f, U+2616-2617, U+261c-261f, U+262f, U+2641, U+2660, U+2662-2664, U+2666-2668, U+266d-266e, U+2672-267d, U+26bd-26be, U+2702, U+271a, U+273d, U+2740, U+2756, U+2776-277f, U+27a1, U+2934-2935, U+29bf, U+29fa-29fb, U+2b05-2b07, U+2b1a, U+2e3a-2e3b, U+2e80-2e99, U+2e9b-2ef3, U+2f00-2f28;
    }
    /* [57] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.57.woff2) format('woff2');
      unicode-range: U+24d4-24ff, U+2503-2513, U+2515-2516, U+2518-251b, U+251d-2522, U+2524-259f, U+25a2-25ab, U+25b1, U+25b7, U+25c0-25c1, U+25c8-25ca, U+25cc, U+25d0-25d3, U+25e2-25e4;
    }
    /* [58] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.58.woff2) format('woff2');
      unicode-range: U+2116, U+2121, U+2126-2127, U+212b, U+212e, U+2135, U+213b, U+2194-2199, U+21b8-21b9, U+21c4-21c6, U+21cb-21cc, U+21d0, U+21e6-21e9, U+21f5, U+2202-2203, U+2205-2206, U+2208-220b, U+220f, U+2211, U+2213, U+2215, U+221a, U+221d, U+2220, U+2223, U+2225-2226, U+2228, U+222a-222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+224c, U+2252, U+2260, U+2262, U+2264-2265, U+226e-226f, U+2272-2273, U+2276-2277, U+2283-2287, U+228a-228b, U+2295-2299, U+22a0, U+22a5, U+22bf, U+22da-22db, U+22ef, U+2305-2307, U+2318, U+2329-232a, U+23b0-23b1, U+23be-23cc, U+23ce, U+23da-23db, U+2423, U+2469-24d3;
    }
    /* [59] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.59.woff2) format('woff2');
      unicode-range: U+a1-a4, U+a6-a7, U+aa, U+ac-ad, U+b5-b6, U+b8-ba, U+bc-c8, U+ca-d5, U+d9-db, U+dd-df, U+e6, U+ee, U+f0, U+f5, U+f7, U+f9, U+fb, U+fe-102, U+110-113, U+11a-11b, U+128-12b, U+143-144, U+147-148, U+14c, U+14e-14f, U+152-153, U+168-16d, U+192, U+1a0-1a1, U+1af, U+1cd-1dc, U+1f8-1f9, U+251, U+261, U+2c7, U+2c9, U+1e3e-1e3f, U+1ea0-1ebe, U+1ec0-1ec6, U+1ec8-1ef9, U+2011-2012, U+2016, U+2018-201a, U+201e, U+2021, U+2027, U+2030, U+2033, U+2035, U+2042, U+2047, U+2051, U+20a9, U+20ab-20ac, U+20dd-20de, U+2100, U+2105, U+2109-210a, U+210f;
    }
    /* [60] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.60.woff2) format('woff2');
      unicode-range: U+2227, U+26a0, U+2713, U+301f, U+4ff8, U+5239, U+526a, U+54fa, U+5740, U+5937, U+5993, U+59fb, U+5a3c, U+5c41, U+6028, U+626e, U+646f, U+647a, U+64b0, U+64e2, U+65a7, U+66fe, U+6727, U+6955, U+6bef, U+6f23, U+724c, U+767c, U+7a83, U+7ac4, U+7b67, U+8000, U+8207, U+8471, U+8513, U+8599, U+86db, U+8718, U+87f2, U+88f3, U+8e2a, U+8fa3, U+95a5, U+9798, U+9910, U+9957, U+9bab, U+9c3b, U+9daf, U+ff95;
    }
    /* [61] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.61.woff2) format('woff2');
      unicode-range: U+a8, U+2032, U+2261, U+2282, U+3090, U+30f1, U+339c, U+535c, U+53d9, U+56a2, U+56c1, U+5806, U+589f, U+59d0, U+5a7f, U+60e0, U+639f, U+65af, U+68fa, U+69ae, U+6d1b, U+6dcb, U+6ef2, U+71fb, U+725d, U+7262, U+75bc, U+7768, U+7940, U+79bf, U+7bed, U+7d68, U+7dfb, U+814b, U+83e9, U+8494, U+8526, U+8568, U+85ea, U+86d9, U+87ba, U+8861, U+887f, U+8fe6, U+9059, U+9061, U+916a, U+976d, U+97ad, U+9ece;
    }
    /* [62] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.62.woff2) format('woff2');
      unicode-range: U+2d9, U+21d4, U+301d, U+515c, U+52fe, U+5420, U+5750, U+5766, U+5954, U+5b0c, U+5b95, U+5f8a, U+5f98, U+620c, U+621f, U+641c, U+66d9, U+676d, U+6775, U+67f5, U+694a, U+6a02, U+6a3a, U+6a80, U+6c23, U+6c72, U+6faa, U+707c, U+71c8, U+7422, U+74e2, U+7791, U+7825, U+7a14, U+7a1c, U+7c95, U+7fc1, U+82a5, U+82db, U+8304, U+853d, U+8cd3, U+8de8, U+8f0c, U+8f3f, U+9091, U+91c7, U+929a, U+98af, U+9913;
    }
    /* [63] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.63.woff2) format('woff2');
      unicode-range: U+2ca-2cb, U+2229, U+2468, U+2669, U+266f, U+273f, U+4ec0, U+4f60, U+4fb6, U+5347, U+540e, U+543b, U+5d4c, U+5df7, U+5f14, U+5f9e, U+6155, U+62d0, U+6602, U+6666, U+66f3, U+67a2, U+67ca, U+69cc, U+6d29, U+6d9b, U+6e3e, U+6f81, U+7109, U+73c0, U+73c2, U+7425, U+7435-7436, U+7525, U+7554, U+785d, U+786b, U+7ae3, U+7b94, U+7d18, U+81bf, U+8511, U+8549, U+9075, U+9640, U+98e2, U+9e9f, U+ff96;
    }
    /* [64] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.64.woff2) format('woff2');
      unicode-range: U+2467, U+4ece, U+4ed4, U+4f91, U+4fae, U+534d, U+53c9, U+54b3, U+586b, U+5944, U+5b78, U+5f77, U+6101, U+6167-6168, U+61a4, U+62d9, U+698a, U+699b, U+6a59, U+6cc4, U+6e07, U+7099, U+75d2, U+77ad, U+7953, U+7984, U+7a92, U+7baa, U+7dbb, U+817f, U+82ad, U+85e9, U+868a, U+8caa, U+8f44, U+9017, U+907c, U+908a, U+92f3, U+936e, U+9435, U+965b, U+978d, U+9838, U+9a28, U+9b41, U+9ba8, U+9c57, U+9eb9;
    }
    /* [65] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.65.woff2) format('woff2');
      unicode-range: U+b1, U+309b, U+4e5e, U+51f1, U+5506, U+55c5, U+58cc, U+59d1, U+5c51, U+5ef7, U+6284, U+62d7, U+6689, U+673d, U+681e, U+6a2b, U+6a8e, U+6a9c, U+6d63, U+6dd1, U+70b8, U+7235, U+72db, U+72f8, U+7560, U+7c9b, U+7ce7, U+7e1e, U+80af, U+82eb, U+8463, U+8499, U+85dd, U+86ee, U+8a60, U+8a6e, U+8c79, U+8e87, U+8e8a, U+8f5f, U+9010, U+918d, U+9190, U+97fb, U+9ab8, U+9bad, U+9d3b, U+9d5c, U+9dfa, U+9e93;
    }
    /* [66] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.66.woff2) format('woff2');
      unicode-range: U+2020, U+3003, U+3231, U+4e9b, U+4f3d, U+4f47, U+51b6, U+51dc, U+53e1, U+55e3, U+5bc5, U+602f, U+60bc, U+61c9, U+633d, U+637b, U+6492, U+65fa, U+660f, U+66f0, U+6703, U+6876, U+6893, U+6912, U+698e, U+6c7d, U+714c, U+7169, U+71d5, U+725f, U+72d7, U+745b, U+74dc, U+75e2, U+7891, U+7897, U+7dcb, U+810a, U+8218, U+8339, U+840e, U+852d, U+8823, U+8a0a, U+9089, U+919c, U+971c, U+9ad9, U+ff4a, U+ff5a;
    }
    /* [67] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.67.woff2) format('woff2');
      unicode-range: U+2466, U+2600, U+4eab, U+4fe3, U+4ff5, U+51a5, U+51f0, U+536f, U+53d4, U+53f1, U+54a5, U+559d, U+58fa, U+5962, U+59ea, U+5c16, U+5cef, U+5d16, U+5f10, U+5fd6, U+6190-6191, U+6216, U+634f, U+63bb, U+66d6, U+6756, U+6bc5, U+6e26, U+727d, U+731f, U+76f2, U+7729, U+7a7f, U+7aff, U+7c9f, U+818f, U+8236, U+82b9, U+8338, U+85aa, U+88b4, U+8b33, U+904d, U+93a7, U+96cc, U+96eb, U+9aed, U+9b8e, U+fa11;
    }
    /* [68] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.68.woff2) format('woff2');
      unicode-range: U+251c, U+2523, U+4e14, U+545f, U+54bd, U+553e, U+55dc, U+56da, U+589c, U+59dc, U+5b55, U+5bb5, U+5ce1, U+5df4, U+5eb6, U+5ec9, U+62f7, U+6357, U+64a5, U+6591, U+65bc, U+6897, U+6e1a, U+7063, U+711a, U+721b, U+722c, U+75b9, U+75d5, U+75fa, U+7766, U+7aae, U+7b48, U+7b8b, U+7d21, U+7e55, U+7f75, U+842c, U+8910, U+8a63, U+8b39, U+8b5a, U+8cdc, U+8d74, U+907d, U+91e7, U+9306, U+96bc, U+98f4, U+9ac4;
    }
    /* [69] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.69.woff2) format('woff2');
      unicode-range: U+2003, U+2312, U+266c, U+4f86, U+51ea, U+5243, U+5256, U+541f, U+5841, U+5df3, U+601c, U+60e7, U+632b, U+638c, U+64ad, U+6881, U+697c, U+69cd, U+6c50, U+6d2a, U+6fc1, U+7027, U+7058, U+70f9, U+714e, U+7345, U+751a, U+760d, U+764c, U+77db, U+79e6, U+7d79, U+7e8f, U+80ce, U+814e, U+81fc, U+8247, U+8278, U+85a9, U+8a03, U+90ed, U+9784, U+9801, U+984e, U+99b3, U+9bc9, U+9bdb, U+9be8, U+9e78, U+ff6b;
    }
    /* [70] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.70.woff2) format('woff2');
      unicode-range: U+266b, U+3006, U+4f10, U+5176, U+5197, U+51a8, U+51c6, U+52f2, U+5614, U+5875, U+5a2f, U+5b54, U+5ce0, U+5dba, U+5deb, U+5e63, U+5f59, U+5fcc, U+6068, U+6367, U+68b6, U+6a0b, U+6b64, U+6e15, U+6eba, U+7272, U+72a0, U+7947, U+7985, U+79e9, U+7a3d, U+7a9f, U+7aaf, U+7b95, U+7f60, U+7f9e, U+7fe0, U+8098, U+80ba, U+8106, U+82d4, U+831c, U+87f9, U+8a1f, U+8acf, U+90c1, U+920d, U+9756, U+fe43, U+ff94;
    }
    /* [71] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.71.woff2) format('woff2');
      unicode-range: U+af, U+2465, U+2517, U+33a1, U+50c5, U+50e7, U+51b4, U+5384, U+5606, U+5bb0, U+5cac, U+5ee3, U+618e, U+61f2, U+62c9, U+66ab, U+66f9, U+6816, U+6960, U+6b3e, U+6f20, U+7078, U+72d0, U+73ed, U+7ad9, U+7b1b, U+7be4, U+7d62, U+7f51, U+80b4, U+80f4, U+8154, U+85fb, U+865c, U+8702, U+895f, U+8aed, U+8b90, U+8ced, U+8fbf, U+91d8, U+9418, U+9583, U+9591, U+9813, U+982c, U+9bd6, U+ff46, U+ff7f, U+ff88;
    }
    /* [72] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.72.woff2) format('woff2');
      unicode-range: U+4e91, U+508d, U+514e, U+51f6, U+5446, U+5504, U+584a, U+59a8, U+59d3, U+5a46, U+5ac9, U+6020, U+60a6, U+6148, U+621a, U+6234, U+64c1, U+6523, U+675c, U+67d1, U+6953, U+6ccc, U+6df5, U+6e13, U+6f06, U+723a, U+7325, U+732a, U+74e6, U+758e, U+75ab, U+75d9, U+7a40, U+8096, U+82fa, U+8587, U+8594, U+8a6b, U+8ab9, U+8b17, U+8b83, U+937c, U+963b, U+9673, U+96db, U+9ce9, U+9f4b, U+ff67, U+ff82, U+ff93;
    }
    /* [73] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.73.woff2) format('woff2');
      unicode-range: U+221e, U+2514, U+51f9, U+5270, U+5449, U+5824, U+59a5, U+59ac, U+5a29, U+5d07, U+5e16, U+60e3, U+614c, U+6276, U+643e, U+64ab, U+6562, U+6681, U+670b, U+6734, U+67af, U+6a3d, U+6b05, U+6dc0, U+6e4a, U+7259, U+7409, U+78a7, U+7a6b, U+8015, U+809b, U+817a, U+830e, U+837b, U+85ab, U+8a23, U+8a93, U+8b00, U+8b19, U+8b21, U+8cbf, U+8fb0, U+901d, U+91b8, U+9320, U+932c, U+9688, U+96f6, U+9df2, U+ff6a;
    }
    /* [74] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.74.woff2) format('woff2');
      unicode-range: U+2002, U+2025, U+4f8d, U+51e1, U+51f8, U+5507, U+5598, U+58f1, U+5983, U+5c3c, U+5de7, U+5e7d, U+5eca, U+5f61, U+606d, U+60f9, U+636e, U+64ec, U+67da, U+67ff, U+6813, U+68f2, U+693f, U+6b6a, U+6bbb, U+6ef4, U+7092, U+717d, U+7261, U+73c8, U+7432, U+7483, U+76fe, U+7709, U+78d0, U+8036, U+81a3, U+81b3, U+82af, U+8305, U+8309, U+8870, U+88fe, U+8cd1, U+8d66, U+906e, U+971e, U+9812, U+ff79, U+ff90;
    }
    /* [75] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.75.woff2) format('woff2');
      unicode-range: U+2464, U+2501, U+2640, U+2642, U+339d, U+4f0e, U+5091, U+50b5, U+5132, U+51cc, U+558b, U+55aa, U+585e, U+5bee, U+5dfe, U+60b6, U+62b9, U+6349, U+6566, U+6590, U+6842, U+689d, U+6a58, U+6bb4, U+6c70, U+6ff1, U+7815, U+7881, U+7aaa, U+7bc7, U+7def, U+7fa8, U+8017, U+8061, U+821f, U+8429, U+8ce0, U+8e74, U+9019, U+90ca, U+9162, U+932f, U+93ae, U+9644, U+990c, U+9cf3, U+ff56, U+ff6e, U+ff7e, U+ff85;
    }
    /* [76] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.76.woff2) format('woff2');
      unicode-range: U+2266-2267, U+4f2f, U+5208, U+5451, U+546a, U+5589, U+576a, U+5815, U+5a9a, U+5b9b, U+5c3a, U+5efb, U+5faa, U+6109, U+6643, U+6652, U+695a, U+69fd, U+6b86, U+6daf, U+6f84, U+7089, U+70cf, U+7a00, U+7a4f, U+7b39, U+7d33, U+80e1, U+828b, U+82a6, U+86cd, U+8c8c, U+8cca, U+8df3, U+9077, U+9175, U+91dc, U+925b, U+9262, U+9271, U+92ed, U+9855, U+9905, U+9d28, U+ff3f, U+ff58, U+ff68, U+ff6d, U+ff9c;
    }
    /* [77] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.77.woff2) format('woff2');
      unicode-range: U+2207, U+25ef, U+309c, U+4e4f, U+5146, U+51dd, U+5351, U+540a, U+5629, U+5eb5, U+5f04, U+5f13, U+60dc, U+6212, U+63b4, U+642c, U+6627, U+66a6, U+66c7, U+66fd, U+674e, U+6b96, U+6c4e, U+6df3, U+6e67, U+72fc, U+733f, U+7c97, U+7cde, U+7db1, U+7e4d, U+816b, U+82d1, U+84cb, U+854e, U+8607, U+86c7, U+871c, U+8776, U+8a89, U+8fc4, U+91a4, U+9285, U+9685, U+9903, U+9b31, U+9f13, U+ff42, U+ff74, U+ff91;
    }
    /* [78] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.78.woff2) format('woff2');
      unicode-range: U+4e32, U+51db, U+53a8, U+53ea, U+5609, U+5674, U+5a92, U+5e7e, U+6115, U+611a, U+62cc, U+62ed, U+63c9, U+64b9, U+64e6, U+65cb, U+6606, U+6731, U+683d, U+6afb, U+7460, U+771e, U+78ef, U+7b26, U+7b51, U+7d10, U+7d2f, U+7d46, U+7db4, U+80de, U+819c, U+84b2, U+85cd, U+865a, U+8ecc, U+9022, U+90b8, U+9192, U+9675, U+96b7, U+99ff, U+ff44, U+ff55, U+ff6c, U+ff73, U+ff75, U+ff86, U+ff8d, U+ff92, U+ffe3;
    }
    /* [79] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.79.woff2) format('woff2');
      unicode-range: U+25b3, U+30f5, U+4eae, U+4f46, U+4f51, U+5203, U+52ff, U+55a7, U+564c, U+565b, U+57f9, U+5805, U+5b64, U+5e06, U+5f70, U+5f90, U+60e8, U+6182, U+62f3, U+62fe, U+63aa, U+64a4, U+65d7, U+673a, U+6851, U+68cb, U+68df, U+6d1e, U+6e58, U+6e9d, U+77b3, U+7832, U+7c3f, U+7f70, U+80aa, U+80c6, U+8105, U+819d, U+8276, U+8679, U+8986, U+8c9d, U+8fc5, U+916c, U+9665, U+9699, U+96c0, U+9a19, U+ff59, U+ff8b;
    }
    /* [80] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.80.woff2) format('woff2');
      unicode-range: U+2463, U+25a1, U+4ef0, U+5076, U+5098, U+51fd, U+5302, U+5448, U+54c9, U+570b, U+583a, U+5893, U+58a8, U+58ee, U+5949, U+5bdb, U+5f26, U+5f81, U+6052, U+6170, U+61c7, U+631f, U+635c, U+664b, U+69fb, U+6f01, U+7070, U+722a, U+745e, U+755c, U+76c6, U+78c1, U+79e4, U+7bb8, U+7d0b, U+81a8, U+81e3, U+82d7, U+8b5c, U+8f14, U+8fb1, U+8fbb, U+9283, U+9298, U+9a30, U+ff03, U+ff50, U+ff7b, U+ff8e-ff8f;
    }
    /* [81] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.81.woff2) format('woff2');
      unicode-range: U+2010, U+2502, U+25b6, U+4f3a, U+514b, U+5265, U+52c3, U+5339, U+53ec, U+54c0, U+55b0, U+5854, U+5b8f, U+5cb3, U+5e84, U+60da, U+6247, U+6249, U+628a, U+62cd, U+65ac, U+67f4, U+6838, U+690e, U+6cf0, U+6f02, U+6f2c, U+6f70, U+708a, U+7434, U+75be, U+77ef, U+7c60, U+7c98, U+7d1b, U+7e2b, U+80a5, U+820c, U+8210, U+8475, U+862d, U+8650, U+8997, U+906d, U+91c8, U+9700, U+9727, U+9df9, U+ff3a, U+ff9a;
    }
    /* [82] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.82.woff2) format('woff2');
      unicode-range: U+2103, U+5049, U+52b1, U+5320, U+5553, U+572d, U+58c7, U+5b5d, U+5bc2, U+5de3, U+5e61, U+5f80, U+61a9, U+67d0, U+6c88, U+6ca1, U+6ce5, U+6d78, U+6e9c, U+6f54, U+731b, U+73b2, U+74a7, U+74f6, U+75e9, U+7b20, U+7c8b, U+7c92, U+7f72, U+809d, U+8108, U+82b3, U+82bd, U+84b8, U+84c4, U+88c2, U+8ae6, U+8ef8, U+902e, U+9065, U+9326, U+935b, U+938c, U+9676, U+9694, U+96f7, U+9ed9, U+ff48, U+ff4c, U+ff81;
    }
    /* [83] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.83.woff2) format('woff2');
      unicode-range: U+2500, U+3008-3009, U+4ead, U+4f0f, U+4fca, U+53eb, U+543e, U+57a2, U+5cf0, U+5e8f, U+5fe0, U+61b2, U+62d8, U+6442, U+64b2, U+6589, U+659c, U+67f1, U+68c4, U+6905, U+6cb8, U+6d12, U+6de1, U+6fe1, U+70c8, U+723d, U+73e0, U+7656, U+773a, U+7948, U+7b87, U+7d3a, U+7e1b, U+7e4a, U+819a, U+8358, U+83c5, U+84bc, U+864e, U+8912, U+8c9e, U+8d05, U+92fc, U+9396, U+98fd, U+99d2, U+ff64, U+ff7a, U+ff83;
    }
    /* [84] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.84.woff2) format('woff2');
      unicode-range: U+3014-3015, U+4e3c, U+5036, U+5075, U+533f, U+53e9, U+5531, U+5642, U+5984, U+59e6, U+5a01, U+5b6b, U+5c0b, U+5f25, U+6069, U+60a0, U+614e, U+62b5, U+62d2-62d3, U+6597, U+660c, U+674f, U+67cf, U+6841, U+6cf3, U+6d32, U+6d69, U+6f64, U+716e, U+7761, U+7b52, U+7be0, U+7dbf, U+7de9, U+7f36, U+81d3, U+8302, U+8389, U+846c, U+84ee, U+8a69, U+9038, U+9d8f, U+ff47, U+ff4b, U+ff76, U+ff97, U+ff9b;
    }
    /* [85] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.85.woff2) format('woff2');
      unicode-range: U+25c7, U+3007, U+504f, U+507d, U+51a0, U+52a3, U+5410, U+5510, U+559a, U+5782, U+582a, U+5c0a, U+5c3f, U+5c48, U+5f6b, U+6176, U+622f, U+6279, U+62bd, U+62dd, U+65ed, U+67b6, U+6817, U+6850, U+6d6a, U+6deb, U+6ea2, U+6edd, U+6f5c, U+72e9, U+73a9, U+7573, U+76bf, U+7950, U+7956, U+7f8a, U+7ffc, U+80a2, U+80c3, U+83ca, U+8a02, U+8a13, U+8df5, U+9375, U+983b, U+9867, U+99b4, U+ff4e, U+ff71, U+ff89;
    }
    /* [86] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.86.woff2) format('woff2');
      unicode-range: U+24, U+2022, U+2212, U+221f, U+2665, U+4ecf, U+5100, U+51cd, U+52d8, U+5378, U+53f6, U+5618, U+574a, U+5982, U+5996, U+5c1a, U+5e1d, U+5f84, U+609f, U+61a7, U+61f8, U+6398, U+63ee, U+6676, U+6691, U+6eb6, U+7126, U+71e5, U+7687, U+7965, U+7d17, U+80a1, U+8107, U+8266, U+85a6, U+8987, U+8ca2, U+8cab, U+8e0a, U+9042, U+95c7, U+9810, U+98fc, U+ff52-ff54, U+ff61, U+ff77, U+ff98-ff99;
    }
    /* [87] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.87.woff2) format('woff2');
      unicode-range: U+b0, U+226a, U+2462, U+4e39, U+4fc3, U+4fd7, U+50be, U+50da, U+5200, U+5211, U+54f2, U+596a, U+5b22, U+5bb4, U+5d50, U+60a3, U+63fa, U+658e, U+65e8, U+6669, U+6795, U+679d, U+67a0, U+6b3a, U+6e09, U+757f, U+7cd6, U+7dbe, U+7ffb, U+83cc, U+83f1, U+840c, U+845b, U+8846, U+8972, U+8a34, U+8a50, U+8a87, U+8edf, U+8ff0, U+90a6, U+9154, U+95a3, U+9663, U+9686, U+96c7, U+ff1b, U+ff3c, U+ff7c, U+ff8a;
    }
    /* [88] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.88.woff2) format('woff2');
      unicode-range: U+25bd, U+4e59, U+4ec1, U+4ff3, U+515a, U+518a, U+525b, U+5375, U+552f, U+57a3, U+5b9c, U+5c3d, U+5e3d, U+5e7b, U+5f0a, U+6094, U+6458, U+654f, U+67f3, U+6b8a, U+6bd2, U+6c37, U+6ce1, U+6e56, U+6e7f, U+6ed1, U+6ede, U+6f0f, U+70ad, U+7267, U+7363, U+786c, U+7a42, U+7db2, U+7f85, U+8178, U+829d, U+8896, U+8c5a, U+8cb0, U+8ce2, U+8ed2, U+9047, U+9177, U+970a, U+9ea6, U+ff31, U+ff39, U+ff49, U+ff80;
    }
    /* [89] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.89.woff2) format('woff2');
      unicode-range: U+a5, U+4e80, U+4ee4, U+4f34, U+4f73, U+4f75, U+511f, U+5192, U+52aa, U+53c8, U+570f, U+57cb, U+596e, U+5d8b, U+5f66, U+5fd9, U+62db, U+62f6, U+6328, U+633f, U+63a7, U+6469, U+6bbf, U+6c41, U+6c57, U+6d44, U+6dbc, U+706f, U+72c2, U+72ed, U+7551, U+75f4, U+7949, U+7e26, U+7fd4, U+8150, U+8af8, U+8b0e, U+8b72, U+8ca7, U+934b, U+9a0e, U+9a12, U+9b42, U+ff41, U+ff43, U+ff45, U+ff4f, U+ff62-ff63;
    }
    /* [90] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.90.woff2) format('woff2');
      unicode-range: U+4e18, U+4fb5, U+5104, U+52c7, U+5353, U+5374, U+53e5, U+587e, U+594f, U+5a20, U+5de1, U+5f18, U+5fcd, U+6291, U+62ab, U+6355, U+6392, U+63da, U+63e1, U+656c, U+6687, U+68b0-68b1, U+68d2, U+68da, U+6b27, U+6cbc, U+7159, U+7344, U+73cd, U+76df, U+790e, U+7cf8, U+8102, U+88c1, U+8aa0, U+8e0f, U+9178, U+92ad, U+9670, U+96c5, U+9cf4, U+9db4, U+ff3e, U+ff6f, U+ff72, U+ff78, U+ff7d, U+ff84, U+ff8c;
    }
    /* [91] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.91.woff2) format('woff2');
      unicode-range: U+60, U+2200, U+226b, U+2461, U+517c, U+526f, U+5800, U+5b97, U+5bf8, U+5c01, U+5d29, U+5e4c, U+5e81, U+6065, U+61d0, U+667a, U+6696, U+6843, U+6c99, U+6d99, U+6ec5, U+6f22, U+6f6e, U+6fa4, U+6fef, U+71c3, U+72d9, U+7384, U+78e8, U+7a1a, U+7a32, U+7a3c, U+7adc, U+7ca7, U+7d2b, U+7dad, U+7e4b, U+80a9, U+8170, U+81ed, U+820e, U+8a17, U+8afe, U+90aa, U+914e, U+963f, U+99c4, U+9eba, U+9f3b, U+ff38;
    }
    /* [92] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.92.woff2) format('woff2');
      unicode-range: U+2460, U+4e5f, U+4e7e, U+4ed9, U+501f, U+502b, U+5968, U+5974, U+5ac1, U+5b99, U+5ba3, U+5be7, U+5be9, U+5c64, U+5cb8, U+5ec3, U+5f1f, U+616e, U+6297, U+62e0, U+62ec, U+6368, U+642d, U+65e6, U+6717, U+676f, U+6b04, U+732e, U+7652, U+76ca, U+76d7, U+7802, U+7e70, U+7f6a, U+8133, U+81e8, U+866b, U+878d, U+88f8, U+8a5e, U+8cdb, U+8d08, U+907a, U+90e1, U+96f2, U+9f8d, U+ff35, U+ff37, U+ff40, U+ff9d;
    }
    /* [93] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.93.woff2) format('woff2');
      unicode-range: U+21d2, U+25ce, U+300a-300b, U+4e89, U+4e9c, U+4ea1, U+5263, U+53cc, U+5426, U+5869, U+5947, U+598a, U+5999, U+5e55, U+5e72, U+5e79, U+5fae, U+5fb9, U+602a, U+6163, U+624d, U+6749, U+6c5a, U+6cbf, U+6d45, U+6dfb, U+6e7e, U+708e, U+725b, U+7763, U+79c0, U+7bc4, U+7c89, U+7e01, U+7e2e, U+8010, U+8033, U+8c6a, U+8cc3, U+8f1d, U+8f9b, U+8fb2, U+907f, U+90f7, U+9707, U+9818, U+9b3c, U+ff0a, U+ff4d;
    }
    /* [94] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.94.woff2) format('woff2');
      unicode-range: U+2015, U+2190, U+4e43, U+5019, U+5247, U+52e7, U+5438, U+54b2, U+55ab, U+57f7, U+5bd2, U+5e8a, U+5ef6, U+6016, U+60b2, U+6162, U+6319, U+6551, U+6607, U+66b4, U+675f, U+67d4, U+6b20, U+6b53, U+6ce3, U+719f, U+75b2, U+770b, U+7720, U+77ac, U+79d2, U+7af9, U+7d05, U+7dca, U+8056, U+80f8, U+81f3, U+8352, U+885d, U+8a70, U+8aa4, U+8cbc, U+900f, U+9084, U+91e3, U+9451, U+96c4, U+99c6, U+9ad4, U+ff70;
    }
    /* [95] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.95.woff2) format('woff2');
      unicode-range: U+2193, U+25b2, U+4e4b, U+516d, U+51c4, U+529f, U+52c9, U+5360, U+5442, U+5857, U+5915, U+59eb, U+5a9b, U+5c3b, U+6012, U+61b6, U+62b1, U+6311, U+6577, U+65e2, U+65ec, U+6613, U+6790, U+6cb9, U+7372, U+76ae, U+7d5e, U+7fcc, U+88ab, U+88d5, U+8caf, U+8ddd, U+8ecd, U+8f38, U+8f9e, U+8feb, U+9063, U+90f5, U+93e1, U+968a, U+968f, U+98fe, U+9ec4, U+ff1d, U+ff27, U+ff2a, U+ff36, U+ff3b, U+ff3d, U+ffe5;
    }
    /* [96] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.96.woff2) format('woff2');
      unicode-range: U+4e03, U+4f38, U+50b7, U+5264, U+5348, U+5371, U+585a, U+58ca, U+5951, U+59b9, U+59d4, U+5b98, U+5f8b, U+6388, U+64cd, U+65e7, U+6803, U+6b6f, U+6d66, U+6e0b, U+6ecb, U+6fc3, U+72ac, U+773c, U+77e2, U+7968, U+7a74, U+7dba, U+7dd1, U+7e3e, U+808c, U+811a, U+8179, U+8239, U+8584, U+8a0e, U+8a72, U+8b66, U+8c46, U+8f29, U+90a3, U+9234, U+96f0, U+9769, U+9774, U+9aa8, U+ff26, U+ff28, U+ff9e-ff9f;
    }
    /* [97] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.97.woff2) format('woff2');
      unicode-range: U+7e, U+b4, U+25c6, U+2661, U+4e92, U+4eee, U+4ffa, U+5144, U+5237, U+5287, U+52b4, U+58c1, U+5bff, U+5c04, U+5c06, U+5e95, U+5f31, U+5f93, U+63c3, U+640d, U+6557, U+6614, U+662f, U+67d3, U+690d, U+6bba, U+6e6f, U+72af, U+732b, U+7518, U+7ae0, U+7ae5, U+7af6, U+822a, U+89e6, U+8a3a, U+8a98, U+8cb8, U+8de1, U+8e8d, U+95d8, U+961c, U+96a3, U+96ea, U+9bae, U+ff20, U+ff22, U+ff29, U+ff2b-ff2c;
    }
    /* [98] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.98.woff2) format('woff2');
      unicode-range: U+25cb, U+4e71, U+4f59, U+50d5, U+520a, U+5217, U+5230, U+523a-523b, U+541b, U+5439, U+5747, U+59c9, U+5bdf, U+5c31, U+5de8, U+5e7c, U+5f69, U+6050, U+60d1, U+63cf, U+663c, U+67c4, U+6885, U+6c38, U+6d6e, U+6db2, U+6df7, U+6e2c, U+6f5f, U+7532, U+76e3-76e4, U+7701, U+793c, U+79f0, U+7a93, U+7d00, U+7de0, U+7e54, U+8328, U+8840, U+969c, U+96e8, U+9811, U+9aea, U+9b5a, U+ff24, U+ff2e, U+ff57;
    }
    /* [99] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.99.woff2) format('woff2');
      unicode-range: U+2191, U+505c, U+52e4, U+5305, U+535a, U+56e0, U+59bb, U+5acc, U+5b09, U+5b87, U+5c90, U+5df1, U+5e2d, U+5e33, U+5f3e, U+6298, U+6383, U+653b, U+6697, U+6804, U+6a39, U+6cca, U+6e90, U+6f2b, U+702c, U+7206, U+7236, U+7559, U+7565, U+7591, U+75c7, U+75db, U+7b4b, U+7bb1, U+7d99, U+7fbd, U+8131, U+885b, U+8b1d, U+8ff7, U+9003, U+9045, U+96a0, U+9732, U+990a, U+99d0, U+9e97, U+9f62, U+ff25, U+ff2d;
    }
    /* [100] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.100.woff2) format('woff2');
      unicode-range: U+4e08, U+4f9d, U+5012, U+514d, U+51b7, U+5275, U+53ca, U+53f8, U+5584, U+57fc, U+5b9d, U+5bfa, U+5c3e, U+5f01, U+5fb4, U+5fd7, U+606f, U+62e1, U+6563, U+6674, U+6cb3, U+6d3e, U+6d74, U+6e1b, U+6e2f, U+718a, U+7247, U+79d8, U+7d14, U+7d66, U+7d71, U+7df4, U+7e41, U+80cc, U+8155, U+83d3, U+8a95, U+8ab2, U+8ad6, U+8ca1, U+9000, U+9006, U+9678, U+97d3, U+9808, U+98ef, U+9a5a, U+9b45, U+ff23, U+ff30;
    }
    /* [101] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.101.woff2) format('woff2');
      unicode-range: U+25bc, U+3012, U+4ef2, U+4f0a, U+516b, U+5373, U+539a, U+53b3, U+559c, U+56f0, U+5727, U+5742, U+5965, U+59ff, U+5bc6, U+5dfb, U+5e45, U+5ead, U+5fb3, U+6211, U+6253, U+639b, U+63a8, U+6545, U+6575, U+6628, U+672d, U+68a8, U+6bdb, U+6d25, U+707d, U+767e, U+7834, U+7b46, U+7bc9, U+8074, U+82e6, U+8349, U+8a2a, U+8d70, U+8da3, U+8fce, U+91cc, U+967d, U+97ff, U+9996, U+ff1c, U+ff2f, U+ff32, U+ff34;
    }
    /* [102] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.102.woff2) format('woff2');
      unicode-range: U+3d, U+5e, U+25cf, U+4e0e, U+4e5d, U+4e73, U+4e94, U+4f3c, U+5009, U+5145, U+51ac, U+5238, U+524a, U+53f3, U+547c, U+5802, U+5922, U+5a66, U+5c0e, U+5de6, U+5fd8, U+5feb, U+6797, U+685c, U+6b7b, U+6c5f-6c60, U+6cc9, U+6ce2, U+6d17, U+6e21, U+7167, U+7642, U+76db, U+8001, U+821e, U+8857, U+89d2, U+8b1b, U+8b70, U+8cb4, U+8cde, U+8f03, U+8f2a, U+968e, U+9b54, U+9e7f, U+9ebb, U+ff05, U+ff33;
    }
    /* [103] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.103.woff2) format('woff2');
      unicode-range: U+500d, U+5074, U+50cd, U+5175, U+52e2, U+5352, U+5354, U+53f2, U+5409, U+56fa, U+5a18, U+5b88, U+5bdd, U+5ca9, U+5f92, U+5fa9, U+60a9, U+623f, U+6483, U+653f, U+666f, U+66ae, U+66f2, U+6a21, U+6b66, U+6bcd, U+6d5c, U+796d, U+7a4d, U+7aef, U+7b56, U+7b97, U+7c4d, U+7e04, U+7fa9, U+8377, U+83dc, U+83ef, U+8535, U+8863, U+88cf, U+88dc, U+8907, U+8acb, U+90ce, U+91dd, U+ff0b, U+ff0d, U+ff19, U+ff65;
    }
    /* [104] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.104.woff2) format('woff2');
      unicode-range: U+4e01, U+4e21, U+4e38, U+52a9, U+547d, U+592e, U+5931, U+5b63, U+5c40, U+5dde, U+5e78, U+5efa, U+5fa1, U+604b, U+6075, U+62c5, U+632f, U+6a19, U+6c0f, U+6c11, U+6c96, U+6e05, U+70ba, U+71b1, U+7387, U+7403, U+75c5, U+77ed, U+795d, U+7b54, U+7cbe, U+7d19, U+7fa4, U+8089, U+81f4, U+8208, U+8336, U+8457, U+8a33, U+8c4a, U+8ca0, U+8ca8, U+8cc0, U+9014, U+964d, U+9803, U+983c, U+98db, U+ff17, U+ff21;
    }
    /* [105] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.105.woff2) format('woff2');
      unicode-range: U+25, U+25a0, U+4e26, U+4f4e, U+5341, U+56f2, U+5bbf, U+5c45, U+5c55, U+5c5e, U+5dee, U+5e9c, U+5f7c, U+6255, U+627f, U+62bc, U+65cf, U+661f, U+666e, U+66dc, U+67fb, U+6975, U+6a4b, U+6b32, U+6df1, U+6e29, U+6fc0, U+738b, U+7686, U+7a76, U+7a81, U+7c73, U+7d75, U+7dd2, U+82e5, U+82f1, U+85ac, U+888b, U+899a, U+8a31, U+8a8c, U+8ab0, U+8b58, U+904a, U+9060, U+9280, U+95b2, U+984d, U+9ce5, U+ff18;
    }
    /* [106] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.106.woff2) format('woff2');
      unicode-range: U+30f6, U+50ac, U+5178, U+51e6, U+5224, U+52dd, U+5883, U+5897, U+590f, U+5a5a, U+5bb3, U+5c65, U+5e03, U+5e2b, U+5e30, U+5eb7, U+6271, U+63f4, U+64ae, U+6574, U+672b, U+679a, U+6a29-6a2a, U+6ca2, U+6cc1, U+6d0b, U+713c, U+74b0, U+7981, U+7a0b, U+7bc0, U+7d1a, U+7d61, U+7fd2, U+822c, U+8996, U+89aa, U+8cac, U+8cbb, U+8d77, U+8def, U+9020, U+9152, U+9244, U+9662, U+967a, U+96e3, U+9759, U+ff16;
    }
    /* [107] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.107.woff2) format('woff2');
      unicode-range: U+23, U+3c, U+2192, U+4e45, U+4efb, U+4f50, U+4f8b, U+4fc2, U+5024, U+5150, U+5272, U+5370, U+53bb, U+542b, U+56db, U+56e3, U+57ce, U+5bc4, U+5bcc, U+5f71, U+60aa, U+6238, U+6280, U+629c, U+6539, U+66ff, U+670d, U+677e-677f, U+6839, U+69cb, U+6b4c, U+6bb5, U+6e96, U+6f14, U+72ec, U+7389, U+7814, U+79cb, U+79d1, U+79fb, U+7a0e, U+7d0d, U+85e4, U+8d64, U+9632, U+96e2, U+9805, U+99ac, U+ff1e;
    }
    /* [108] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.108.woff2) format('woff2');
      unicode-range: U+2605-2606, U+301c, U+4e57, U+4fee, U+5065, U+52df, U+533b, U+5357, U+57df, U+58eb, U+58f0, U+591c, U+592a-592b, U+5948, U+5b85, U+5d0e, U+5ea7, U+5ff5, U+6025, U+63a1, U+63a5, U+63db, U+643a, U+65bd, U+671d, U+68ee, U+6982, U+6b73, U+6bd4, U+6d88, U+7570, U+7b11, U+7d76, U+8077, U+8217, U+8c37, U+8c61, U+8cc7, U+8d85, U+901f, U+962a, U+9802, U+9806, U+9854, U+98f2, U+9928, U+99c5, U+9ed2;
    }
    /* [109] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.109.woff2) format('woff2');
      unicode-range: U+266a, U+4f11, U+533a, U+5343, U+534a, U+53cd, U+5404, U+56f3, U+5b57-5b58, U+5bae, U+5c4a, U+5e0c, U+5e2f, U+5eab, U+5f35, U+5f79, U+614b, U+6226, U+629e, U+65c5, U+6625, U+6751, U+6821, U+6b69, U+6b8b, U+6bce, U+6c42, U+706b, U+7c21, U+7cfb, U+805e, U+80b2, U+82b8, U+843d, U+8853, U+88c5, U+8a3c, U+8a66, U+8d8a, U+8fba, U+9069, U+91cf, U+9752, U+975e, U+9999, U+ff0f-ff10, U+ff14-ff15;
    }
    /* [110] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.110.woff2) format('woff2');
      unicode-range: U+40, U+4e86, U+4e95, U+4f01, U+4f1d, U+4fbf, U+5099, U+5171, U+5177, U+53cb, U+53ce, U+53f0, U+5668, U+5712, U+5ba4, U+5ca1, U+5f85, U+60f3, U+653e, U+65ad, U+65e9, U+6620, U+6750, U+6761, U+6b62, U+6b74, U+6e08, U+6e80, U+7248, U+7531, U+7533, U+753a, U+77f3, U+798f, U+7f6e, U+8449, U+88fd, U+89b3, U+8a55, U+8ac7, U+8b77, U+8db3, U+8efd, U+8fd4, U+9031-9032, U+9580, U+9589, U+96d1, U+985e;
    }
    /* [111] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.111.woff2) format('woff2');
      unicode-range: U+2b, U+d7, U+300e-300f, U+4e07, U+4e8c, U+512a, U+5149, U+518d, U+5236, U+52b9, U+52d9, U+5468, U+578b, U+57fa, U+5b8c, U+5ba2, U+5c02, U+5de5, U+5f37, U+5f62, U+623b, U+63d0, U+652f, U+672a, U+6848, U+6d41, U+7136, U+7537, U+754c, U+76f4, U+79c1, U+7ba1, U+7d44, U+7d4c, U+7dcf, U+7dda, U+7de8, U+82b1, U+897f, U+8ca9, U+8cfc, U+904e, U+9664, U+982d, U+9858, U+98a8, U+9a13, U+ff13, U+ff5c;
    }
    /* [112] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.112.woff2) format('woff2');
      unicode-range: U+4e16, U+4e3b, U+4ea4, U+4f4d, U+4f4f, U+4f55, U+4f9b, U+5317, U+5358, U+539f, U+53c2, U+53e4, U+548c, U+571f, U+59cb, U+5cf6, U+5e38, U+63a2, U+63b2, U+6559, U+662d, U+679c, U+6c7a, U+72b6, U+7523, U+767d, U+770c, U+7a2e, U+7a3f, U+7a7a, U+7b2c, U+7b49, U+7d20, U+7d42, U+8003, U+8272, U+8a08, U+8aac, U+8cb7, U+8eab, U+8ee2, U+9054-9055, U+90fd, U+914d, U+91cd, U+969b, U+97f3, U+984c, U+ff06;
    }
    /* [113] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.113.woff2) format('woff2');
      unicode-range: U+26, U+5f, U+2026, U+203b, U+4e09, U+4eac, U+4ed5, U+4fa1, U+5143, U+5199, U+5207, U+53e3, U+53f7, U+5411, U+5473, U+5546, U+55b6, U+5929, U+597d, U+5bb9, U+5c11, U+5c4b, U+5ddd, U+5f97, U+5fc5, U+6295, U+6301, U+6307, U+671b, U+76f8, U+78ba, U+795e, U+7d30, U+7d39, U+7d50, U+7d9a, U+89e3, U+8a00, U+8a73, U+8a8d, U+8a9e, U+8aad, U+8abf, U+8cea, U+8eca, U+8ffd, U+904b, U+9650, U+ff11-ff12;
    }
    /* [114] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.114.woff2) format('woff2');
      unicode-range: U+3e, U+3005, U+4e0d, U+4e88, U+4ecb, U+4ee3, U+4ef6, U+4fdd, U+4fe1, U+500b, U+50cf, U+5186, U+5316, U+53d7, U+540c, U+544a, U+54e1, U+5728, U+58f2, U+591a, U+5973, U+5b89, U+5c71, U+5e02, U+5e97, U+5f15, U+5fc3, U+5fdc, U+601d, U+611b, U+611f, U+671f, U+6728, U+6765, U+683c, U+6b21, U+6ce8, U+6d3b, U+6d77, U+7530, U+7740, U+7acb, U+826f, U+8f09, U+8fbc, U+9001, U+9053, U+91ce, U+9762, U+98df;
    }
    /* [115] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.115.woff2) format('woff2');
      unicode-range: U+7c, U+3080, U+4ee5, U+5148, U+516c, U+521d, U+5225, U+529b, U+52a0, U+53ef, U+56de, U+56fd, U+5909, U+5b66, U+5b9f, U+5bb6, U+5bfe, U+5e73, U+5e83, U+5ea6, U+5f53, U+6027, U+610f, U+6210, U+6240, U+660e, U+66f4, U+66f8, U+6709, U+6771, U+697d, U+69d8, U+6a5f, U+6c34, U+6cbb, U+6cd5, U+73fe, U+756a, U+7684, U+771f, U+793a, U+7f8e, U+898f, U+8a2d, U+8a71, U+8fd1, U+9078, U+9577, U+96fb, U+ff5e;
    }
    /* [116] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.116.woff2) format('woff2');
      unicode-range: U+d, U+a9, U+3010-3011, U+30e2, U+4e0b, U+4eca, U+4ed6, U+4ed8, U+4f53, U+4f5c, U+4f7f, U+53d6, U+540d, U+54c1, U+5730, U+5916, U+5b50, U+5c0f, U+5f8c, U+624b, U+6570, U+6587, U+6599, U+691c, U+696d, U+7269, U+7279, U+7406, U+767a-767b, U+77e5, U+7d04, U+7d22, U+8005, U+80fd, U+81ea, U+8868, U+8981, U+89a7, U+901a, U+9023, U+90e8, U+91d1, U+9332, U+958b, U+96c6, U+9ad8, U+ff1a, U+ff1f;
    }
    /* [117] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.117.woff2) format('woff2');
      unicode-range: U+4e, U+a0, U+3000, U+300c-300d, U+4e00, U+4e0a, U+4e2d, U+4e8b, U+4eba, U+4f1a, U+5165, U+5168, U+5185, U+51fa, U+5206, U+5229, U+524d, U+52d5, U+5408, U+554f, U+5831, U+5834, U+5927, U+5b9a, U+5e74, U+5f0f, U+60c5, U+65b0, U+65b9, U+6642, U+6700, U+672c, U+682a, U+6b63, U+6c17, U+7121, U+751f, U+7528, U+753b, U+76ee, U+793e, U+884c, U+898b, U+8a18, U+9593, U+95a2, U+ff01, U+ff08-ff09;
    }
    /* [118] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.118.woff2) format('woff2');
      unicode-range: U+21-22, U+27-2a, U+2c-3b, U+3f, U+41-4d, U+4f-5d, U+61-7b, U+7d, U+ab, U+ae, U+b2-b3, U+b7, U+bb, U+c9, U+d6, U+d8, U+dc, U+e0-e5, U+e7-ed, U+ef, U+f1-f4, U+f6, U+f8, U+fa, U+fc-fd, U+103, U+14d, U+1b0, U+1ebf, U+1ec7, U+2013-2014, U+201c-201d, U+2039-203a, U+203c, U+2048-2049, U+2113, U+2122, U+65e5, U+6708, U+70b9;
    }
    /* [119] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.119.woff2) format('woff2');
      unicode-range: U+20, U+3001-3002, U+3041-307f, U+3081-308f, U+3091-3093, U+3099-309a, U+309d-309e, U+30a1-30e1, U+30e3-30ed, U+30ef-30f0, U+30f2-30f4, U+30fb-30fe, U+ff0c, U+ff0e;
    }
    /* [0] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.0.woff2) format('woff2');
      unicode-range: U+25e56, U+25e62, U+25e65, U+25ec2, U+25ed8, U+25ee8, U+25f23, U+25f5c, U+25fd4, U+25fe0, U+25ffb, U+2600c, U+26017, U+26060, U+260ed, U+26222, U+2626a, U+26270, U+26286, U+2634c, U+26402, U+2667e, U+266b0, U+2671d, U+268dd, U+268ea, U+26951, U+2696f, U+26999, U+269dd, U+26a1e, U+26a58, U+26a8c, U+26ab7, U+26aff, U+26c29, U+26c73, U+26c9e, U+26cdd, U+26e40, U+26e65, U+26f94, U+26ff6-26ff8, U+270f4, U+2710d, U+27139, U+273da-273db, U+273fe, U+27410, U+27449, U+27614-27615, U+27631, U+27684, U+27693, U+2770e, U+27723, U+27752, U+278b2, U+27985, U+279b4, U+27a84, U+27bb3, U+27bbe, U+27bc7, U+27c3c, U+27cb8, U+27d73, U+27da0, U+27e10, U+27fb7, U+2808a, U+280bb, U+28277, U+28282, U+282f3, U+283cd, U+2840c, U+28455, U+2856b, U+285c8-285c9, U+286d7, U+286fa, U+28946, U+28949, U+2896b, U+28987-28988, U+289ba-289bb, U+28a1e, U+28a29, U+28a43, U+28a71, U+28a99, U+28acd, U+28add, U+28ae4, U+28bc1, U+28bef, U+28cdd, U+28d10, U+28d71, U+28dfb, U+28e0f, U+28e17, U+28e1f, U+28e36, U+28e89, U+28eeb, U+28ef6, U+28f32, U+28ff8, U+292a0, U+292b1, U+29490, U+295cf, U+2967f, U+296f0, U+29719, U+29750, U+29810, U+298c6, U+29a72, U+29d4b, U+29ddb, U+29e15, U+29e3d, U+29e49, U+29e8a, U+29ec4, U+29edb, U+29ee9, U+29fce, U+29fd7, U+2a01a, U+2a02f, U+2a082, U+2a0f9, U+2a190, U+2a2b2, U+2a38c, U+2a437, U+2a5f1, U+2a602, U+2a61a, U+2a6b2, U+2a9e6, U+2b746, U+2b751, U+2b753, U+2b75a, U+2b75c, U+2b765, U+2b776-2b777, U+2b77c, U+2b782, U+2b789, U+2b78b, U+2b78e, U+2b794, U+2b7ac, U+2b7af, U+2b7bd, U+2b7c9, U+2b7cf, U+2b7d2, U+2b7d8, U+2b7f0, U+2b80d, U+2b817, U+2b81a, U+2f804, U+2f80f, U+2f815, U+2f818, U+2f81a, U+2f822, U+2f828, U+2f82c, U+2f833, U+2f83f, U+2f846, U+2f852, U+2f862, U+2f86d, U+2f873, U+2f877, U+2f884, U+2f899-2f89a, U+2f8a6, U+2f8ac, U+2f8b2, U+2f8b6, U+2f8d3, U+2f8db-2f8dc, U+2f8e1, U+2f8e5, U+2f8ea, U+2f8ed, U+2f8fc, U+2f903, U+2f90b, U+2f90f, U+2f91a, U+2f920-2f921, U+2f945, U+2f947, U+2f96c, U+2f995, U+2f9d0, U+2f9de-2f9df, U+2f9f4;
    }
    /* [1] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.1.woff2) format('woff2');
      unicode-range: U+1f230-1f23a, U+1f240-1f248, U+1f250-1f251, U+2000b, U+20089-2008a, U+200a2, U+200a4, U+200b0, U+200f5, U+20158, U+201a2, U+20213, U+2032b, U+20371, U+20381, U+203f9, U+2044a, U+20509, U+2053f, U+205b1, U+205d6, U+20611, U+20628, U+206ec, U+2074f, U+207c8, U+20807, U+2083a, U+208b9, U+2090e, U+2097c, U+20984, U+2099d, U+20a64, U+20ad3, U+20b1d, U+20b9f, U+20bb7, U+20d45, U+20d58, U+20de1, U+20e64, U+20e6d, U+20e95, U+20f5f, U+21201, U+2123d, U+21255, U+21274, U+2127b, U+212d7, U+212e4, U+212fd, U+2131b, U+21336, U+21344, U+213c4, U+2146d-2146e, U+215d7, U+21647, U+216b4, U+21706, U+21742, U+218bd, U+219c3, U+21a1a, U+21c56, U+21d2d, U+21d45, U+21d62, U+21d78, U+21d92, U+21d9c, U+21da1, U+21db7, U+21de0, U+21e33-21e34, U+21f1e, U+21f76, U+21ffa, U+2217b, U+22218, U+2231e, U+223ad, U+22609, U+226f3, U+2285b, U+228ab, U+2298f, U+22ab8, U+22b46, U+22b4f-22b50, U+22ba6, U+22c1d, U+22c24, U+22de1, U+22e42, U+22feb, U+231b6, U+231c3-231c4, U+231f5, U+23372, U+233cc, U+233d0, U+233d2-233d3, U+233d5, U+233da, U+233df, U+233e4, U+233fe, U+2344a-2344b, U+23451, U+23465, U+234e4, U+2355a, U+23594, U+235c4, U+23638-2363a, U+23647, U+2370c, U+2371c, U+2373f, U+23763-23764, U+237e7, U+237f1, U+237ff, U+23824, U+2383d, U+23a98, U+23c7f, U+23cbe, U+23cfe, U+23d00, U+23d0e, U+23d40, U+23dd3, U+23df9-23dfa, U+23f7e, U+2404b, U+24096, U+24103, U+241c6, U+241fe, U+242ee, U+243bc, U+243d0, U+24629, U+246a5, U+247f1, U+24896, U+248e9, U+24a4d, U+24b56, U+24b6f, U+24c16, U+24d14, U+24e04, U+24e0e, U+24e37, U+24e6a, U+24e8b, U+24ff2, U+2504a, U+25055, U+25122, U+251a9, U+251cd, U+251e5, U+2521e, U+2524c, U+2542e, U+2548e, U+254d9, U+2550e, U+255a7, U+2567f, U+25771, U+257a9, U+257b4, U+25874, U+259c4, U+259cc, U+259d4, U+25ad7, U+25ae3-25ae4, U+25af1, U+25bb2, U+25c4b, U+25c64, U+25da1, U+25e2e;
    }
    /* [2] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.2.woff2) format('woff2');
      unicode-range: U+ffb6-ffbe, U+ffc2-ffc7, U+ffca-ffcf, U+ffd2-ffd7, U+ffda-ffdc, U+ffe0-ffe2, U+ffe4, U+ffe6, U+ffe8-ffee, U+1f100-1f10a, U+1f110-1f12e, U+1f130-1f16b, U+1f170-1f19a, U+1f200-1f202, U+1f210-1f22f;
    }
    /* [3] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.3.woff2) format('woff2');
      unicode-range: U+f9f6-fa0b, U+fa0e-fa10, U+fa12-fa6d, U+fb00-fb04, U+fe10-fe19, U+fe30-fe42, U+fe44-fe52, U+fe54-fe66, U+fe68-fe6b, U+ff02, U+ff04, U+ff07, U+ff51, U+ff5b, U+ff5d, U+ff5f-ff60, U+ff66, U+ff69, U+ff87, U+ffa0-ffb5;
    }
    /* [5] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.5.woff2) format('woff2');
      unicode-range: U+9e16, U+9e19-9e1f, U+9e75, U+9e79-9e7d, U+9e80-9e85, U+9e87-9e88, U+9e8b-9e8c, U+9e8e-9e8f, U+9e91-9e92, U+9e95-9e96, U+9e98, U+9e9b, U+9e9d-9e9e, U+9ea4-9ea5, U+9ea8-9eaa, U+9eac-9eb0, U+9eb3-9eb5, U+9eb8, U+9ebc-9ebf, U+9ec3, U+9ec6, U+9ec8, U+9ecb-9ecd, U+9ecf-9ed1, U+9ed4-9ed5, U+9ed8, U+9edb-9ee0, U+9ee4-9ee5, U+9ee7-9ee8, U+9eec-9ef2, U+9ef4-9ef9, U+9efb-9eff, U+9f02-9f03, U+9f07-9f09, U+9f0e-9f12, U+9f14-9f17, U+9f19-9f1b, U+9f1f-9f22, U+9f26, U+9f2a-9f2c, U+9f2f, U+9f31-9f32, U+9f34, U+9f37, U+9f39-9f3a, U+9f3c-9f3f, U+9f41, U+9f43-9f47, U+9f4a, U+9f4e-9f50, U+9f52-9f58, U+9f5a, U+9f5d-9f61, U+9f63, U+9f66-9f6a, U+9f6c-9f73, U+9f75-9f77, U+9f7a, U+9f7d, U+9f7f, U+9f8f-9f92, U+9f94-9f97, U+9f99, U+9f9c-9fa3, U+9fa5, U+9fb4, U+9fbc-9fc2, U+9fc4, U+9fc6, U+9fcc, U+f900-f915;
    }
    /* [6] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.6.woff2) format('woff2');
      unicode-range: U+9c22-9c2a, U+9c2d-9c32, U+9c35-9c37, U+9c39-9c3a, U+9c3d-9c3e, U+9c41, U+9c43-9c4a, U+9c4e-9c50, U+9c52-9c54, U+9c56, U+9c58, U+9c5a-9c61, U+9c63, U+9c65, U+9c67-9c6b, U+9c6d-9c6e, U+9c70, U+9c72, U+9c75-9c78, U+9c7a-9c7c, U+9ce6-9ce7, U+9ceb-9cec, U+9cf0, U+9cf2, U+9cf6-9cf7, U+9cf9, U+9d02-9d03, U+9d06-9d09, U+9d0b, U+9d0e, U+9d11-9d12, U+9d15, U+9d17-9d18, U+9d1b-9d1f, U+9d23, U+9d26, U+9d2a-9d2c, U+9d2f-9d30, U+9d32-9d34, U+9d3a, U+9d3c-9d3f, U+9d41-9d48, U+9d4a, U+9d50-9d54, U+9d59, U+9d5d-9d65, U+9d69-9d6c, U+9d6f-9d70, U+9d72-9d73, U+9d76-9d77, U+9d7a-9d7c, U+9d7e, U+9d83-9d84, U+9d86-9d87, U+9d89-9d8a, U+9d8d-9d8e, U+9d92-9d93, U+9d95-9d9a, U+9da1, U+9da4, U+9da9-9dac, U+9dae, U+9db1-9db2, U+9db5, U+9db8-9dbd, U+9dbf-9dc4, U+9dc6-9dc7, U+9dc9-9dca, U+9dcf, U+9dd3-9dd7, U+9dd9-9dda, U+9dde-9de0, U+9de3, U+9de5-9de7, U+9de9, U+9deb, U+9ded-9df0, U+9df3-9df4, U+9df8, U+9dfd-9dfe, U+9e02, U+9e07, U+9e0a, U+9e0d-9e0e, U+9e10-9e12, U+9e15;
    }
    /* [7] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.7.woff2) format('woff2');
      unicode-range: U+9ac3, U+9ac6, U+9ac8, U+9ace-9ad3, U+9ad5-9ad7, U+9adb-9adc, U+9ade-9ae0, U+9ae2-9ae7, U+9ae9, U+9aeb-9aec, U+9aee-9aef, U+9af1-9af5, U+9af7, U+9af9-9afb, U+9afd, U+9aff-9b06, U+9b08-9b09, U+9b0b-9b0e, U+9b10, U+9b12, U+9b16, U+9b18-9b1d, U+9b1f-9b20, U+9b22-9b23, U+9b25-9b2f, U+9b32-9b35, U+9b37, U+9b39-9b3b, U+9b3d, U+9b43-9b44, U+9b48, U+9b4b-9b4f, U+9b51, U+9b55-9b58, U+9b5b, U+9b5e, U+9b61, U+9b63, U+9b65-9b66, U+9b68, U+9b6a-9b6f, U+9b72-9b79, U+9b7f-9b80, U+9b83-9b87, U+9b89-9b8b, U+9b8d, U+9b8f-9b94, U+9b96-9b97, U+9b9a, U+9b9d-9ba0, U+9ba6-9ba7, U+9ba9-9baa, U+9bac, U+9bb0-9bb2, U+9bb4, U+9bb7-9bb9, U+9bbb-9bbc, U+9bbe-9bc1, U+9bc6-9bc8, U+9bca, U+9bce-9bd2, U+9bd4, U+9bd7-9bd8, U+9bdd, U+9bdf, U+9be1-9be5, U+9be7, U+9bea-9beb, U+9bee-9bf3, U+9bf5, U+9bf7-9bfa, U+9bfd, U+9bff-9c00, U+9c02, U+9c04, U+9c06, U+9c08-9c0d, U+9c0f-9c16, U+9c18-9c1e, U+9c21;
    }
    /* [8] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.8.woff2) format('woff2');
      unicode-range: U+98c3-98c8, U+98cb-98cc, U+98ce, U+98dc, U+98de, U+98e0-98e1, U+98e3, U+98e5-98e7, U+98e9-98eb, U+98ed-98ee, U+98f0-98f1, U+98f3, U+98f6, U+9902, U+9907-9909, U+9911-9912, U+9914-9918, U+991a-9922, U+9924, U+9926-9927, U+992b-992c, U+992e, U+9931-9935, U+9939-993e, U+9940-9942, U+9945-9949, U+994b-994e, U+9950-9952, U+9954-9955, U+9958-9959, U+995b-995c, U+995e-9960, U+9963, U+9997-9998, U+999b, U+999d-999f, U+99a3, U+99a5-99a6, U+99a8, U+99ad-99ae, U+99b0-99b2, U+99b5, U+99b9-99ba, U+99bc-99bd, U+99bf, U+99c1, U+99c3, U+99c8-99c9, U+99d1, U+99d3-99d5, U+99d8-99df, U+99e1-99e2, U+99e7, U+99ea-99ee, U+99f0-99f2, U+99f4-99f5, U+99f8-99f9, U+99fb-99fe, U+9a01-9a05, U+9a08, U+9a0a-9a0c, U+9a0f-9a11, U+9a16, U+9a1a, U+9a1e, U+9a20, U+9a22-9a24, U+9a27, U+9a2b, U+9a2d-9a2e, U+9a31, U+9a33, U+9a35-9a38, U+9a3e, U+9a40-9a45, U+9a47, U+9a4a-9a4e, U+9a51-9a52, U+9a54-9a58, U+9a5b, U+9a5d, U+9a5f, U+9a62, U+9a64-9a65, U+9a69-9a6c, U+9aaa, U+9aac-9ab0, U+9ab2, U+9ab4-9ab7, U+9ab9, U+9abb-9ac1;
    }
    /* [9] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.9.woff2) format('woff2');
      unicode-range: U+96fa, U+9702-9706, U+9708-9709, U+970d-970f, U+9711, U+9713-9714, U+9716, U+9719-971b, U+971d, U+9721-9724, U+9728, U+972a, U+9730-9731, U+9733, U+9736, U+9738-9739, U+973b, U+973d-973e, U+9741-9744, U+9746-974a, U+974d-974f, U+9751, U+9755, U+9757-9758, U+975a-975c, U+9760-9761, U+9763-9764, U+9766-9768, U+976a-976b, U+976e, U+9771, U+9773, U+9776-977d, U+977f-9781, U+9785-9786, U+9789, U+978b, U+978f-9790, U+9795-9797, U+9799-979a, U+979c, U+979e-97a0, U+97a2-97a3, U+97a6, U+97a8, U+97ab-97ac, U+97ae, U+97b1-97b6, U+97b8-97ba, U+97bc, U+97be-97bf, U+97c1, U+97c3-97ce, U+97d0-97d1, U+97d4, U+97d7-97d9, U+97db-97de, U+97e0-97e1, U+97e4, U+97e6, U+97ed-97ef, U+97f1-97f2, U+97f4-97f8, U+97fa, U+9804, U+9807, U+980a, U+980c-980f, U+9814, U+9816-9817, U+9819-981a, U+981c, U+981e, U+9820-9821, U+9823-9826, U+982b, U+982e-9830, U+9832-9835, U+9837, U+9839, U+983d-983e, U+9844, U+9846-9847, U+984a-984b, U+984f, U+9851-9853, U+9856-9857, U+9859-985b, U+9862-9863, U+9865-9866, U+986a-986c, U+986f-9871, U+9873-9875, U+98aa-98ab, U+98ad-98ae, U+98b0-98b1, U+98b4, U+98b6-98b8, U+98ba-98bc, U+98bf, U+98c2;
    }
    /* [10] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.10.woff2) format('woff2');
      unicode-range: U+942e-942f, U+9431-9434, U+9436, U+9438, U+943a-943b, U+943d, U+943f, U+9441, U+9443-9445, U+9448, U+944a, U+944c, U+9452-9453, U+9455, U+9459-945c, U+945e-9463, U+9468, U+946a-946b, U+946d-9472, U+9475, U+9477, U+947c-947f, U+9481, U+9483-9485, U+9578-9579, U+957e-957f, U+9582, U+9584, U+9586-9588, U+958a, U+958c-958f, U+9592, U+9594, U+9596, U+9598-9599, U+959d-95a1, U+95a4, U+95a6-95a9, U+95ab-95ad, U+95b1, U+95b4, U+95b6, U+95b9-95bf, U+95c3, U+95c6, U+95c8-95cd, U+95d0-95d6, U+95d9-95da, U+95dc-95e2, U+95e4-95e6, U+95e8, U+961d-961e, U+9621-9622, U+9624-9626, U+9628, U+962c, U+962e-962f, U+9631, U+9633-9634, U+9637-963a, U+963c-963d, U+9641-9642, U+964b-964c, U+964f, U+9652, U+9654, U+9656-9658, U+965c-965f, U+9661, U+9666, U+966a, U+966c, U+966e, U+9672, U+9674, U+9677, U+967b-967c, U+967e-967f, U+9681-9684, U+9689, U+968b, U+968d, U+9691, U+9695-9698, U+969a, U+969d, U+969f, U+96a4-96aa, U+96ae-96b4, U+96b6, U+96b8-96bb, U+96bd, U+96c1, U+96c9-96cb, U+96cd-96ce, U+96d2, U+96d5-96d6, U+96d8-96da, U+96dc-96df, U+96e9, U+96ef, U+96f1, U+96f9;
    }
    /* [11] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.11.woff2) format('woff2');
      unicode-range: U+929f-92a0, U+92a4-92a5, U+92a7-92a8, U+92ab, U+92af, U+92b2-92b3, U+92b6-92bd, U+92bf-92c3, U+92c5-92c8, U+92cb-92d0, U+92d2-92d3, U+92d5, U+92d7-92d9, U+92dc-92dd, U+92df-92e1, U+92e3-92e5, U+92e7-92ea, U+92ec, U+92ee, U+92f0, U+92f2, U+92f7-92fb, U+92ff-9300, U+9302, U+9304, U+9308, U+930d, U+930f-9311, U+9314-9315, U+9318-931a, U+931c-931f, U+9321-9325, U+9327-932b, U+932e, U+9333-9337, U+933a-933b, U+9344, U+9347-934a, U+934d, U+9350-9352, U+9354-9358, U+935a, U+935c, U+935e, U+9360, U+9364-9365, U+9367, U+9369-936d, U+936f-9371, U+9373-9374, U+9376, U+937a, U+937d-9382, U+9388, U+938a-938b, U+938d, U+938f, U+9392, U+9394-9395, U+9397-9398, U+939a-939b, U+939e, U+93a1, U+93a3-93a4, U+93a6, U+93a8-93a9, U+93ab-93ad, U+93b0, U+93b4-93b6, U+93b9-93bb, U+93c1, U+93c3-93cd, U+93d0-93d1, U+93d3, U+93d6-93d9, U+93dc-93df, U+93e2, U+93e4-93e8, U+93f1, U+93f5, U+93f7-93fb, U+93fd, U+9401-9404, U+9407-9409, U+940d-9410, U+9413-9417, U+9419-941a, U+941f, U+9421, U+942b;
    }
    /* [12] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.12.woff2) format('woff2');
      unicode-range: U+9127, U+9129, U+912d-9132, U+9134, U+9136-9137, U+9139-913a, U+913c-913d, U+9143, U+9146-914c, U+914f, U+9153, U+9156-915b, U+9161, U+9163-9165, U+9167, U+9169, U+916d, U+9172-9174, U+9179-917b, U+9181-9183, U+9185-9187, U+9189-918b, U+918e, U+9191, U+9193-9195, U+9197-9198, U+919e, U+91a1-91a2, U+91a6, U+91a8, U+91aa-91b6, U+91ba-91bd, U+91bf-91c6, U+91c9, U+91cb, U+91d0, U+91d3-91d4, U+91d6-91d7, U+91d9-91db, U+91de-91df, U+91e1, U+91e4-91e6, U+91e9-91ea, U+91ec-91f1, U+91f5-91f7, U+91f9, U+91fb-91fd, U+91ff-9201, U+9204-9207, U+9209-920a, U+920c, U+920e, U+9210-9218, U+921c-921e, U+9223-9226, U+9228-9229, U+922c, U+922e-9230, U+9233, U+9235-923a, U+923c, U+923e-9240, U+9242-9243, U+9245-924b, U+924d-9251, U+9256-925a, U+925c-925e, U+9260-9261, U+9264-9269, U+926e-9270, U+9275-9279, U+927b-927f, U+9288-928a, U+928d-928e, U+9291-9293, U+9295-9297, U+9299, U+929b-929c;
    }
    /* [13] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.13.woff2) format('woff2');
      unicode-range: U+8f40-8f43, U+8f45-8f47, U+8f49-8f4a, U+8f4c-8f4f, U+8f51-8f55, U+8f57-8f58, U+8f5c-8f5e, U+8f61-8f66, U+8f9c-8f9d, U+8f9f-8fa2, U+8fa4-8fa8, U+8fad-8faf, U+8fb4-8fb8, U+8fbe, U+8fc0-8fc2, U+8fc6, U+8fc8, U+8fca-8fcb, U+8fcd, U+8fd0, U+8fd2-8fd3, U+8fd5, U+8fda, U+8fe0, U+8fe2-8fe5, U+8fe8-8fea, U+8fed-8fef, U+8ff1, U+8ff4-8ff6, U+8ff8-8ffb, U+8ffe, U+9002, U+9004-9005, U+9008, U+900b-900e, U+9011, U+9013, U+9015-9016, U+9018, U+901b, U+901e, U+9021, U+9027-902a, U+902c-902d, U+902f, U+9033-9037, U+9039, U+903c, U+903e-903f, U+9041, U+9043-9044, U+9049, U+904c, U+904f-9052, U+9056, U+9058, U+905b-905e, U+9062, U+9066-9068, U+906c, U+906f-9070, U+9072, U+9074, U+9076, U+9079, U+9080-9083, U+9085, U+9087-9088, U+908b-908c, U+908e-9090, U+9095, U+9097-9099, U+909b, U+90a0-90a2, U+90a5, U+90a8, U+90af-90b6, U+90bd-90be, U+90c3-90c5, U+90c7-90c9, U+90cc, U+90d2, U+90d5, U+90d7-90d9, U+90db-90df, U+90e2, U+90e4-90e5, U+90eb, U+90ef-90f0, U+90f2, U+90f4, U+90f6, U+90fe-9100, U+9102, U+9104-9106, U+9108, U+910d, U+9110, U+9112, U+9114-911a, U+911c, U+911e, U+9120, U+9122-9123, U+9125;
    }
    /* [14] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.14.woff2) format('woff2');
      unicode-range: U+8da6, U+8da8, U+8dab-8dac, U+8daf, U+8db2, U+8db5, U+8db7, U+8db9-8dbc, U+8dbe, U+8dc0, U+8dc2, U+8dc5-8dc8, U+8dca-8dcc, U+8dce-8dcf, U+8dd1, U+8dd4-8dd7, U+8dd9-8ddb, U+8ddf, U+8de3-8de5, U+8de7, U+8dea-8dec, U+8df0-8df2, U+8df4, U+8dfc-8dfd, U+8dff, U+8e01, U+8e04-8e06, U+8e08-8e09, U+8e0b-8e0c, U+8e10-8e11, U+8e14, U+8e16, U+8e1d-8e23, U+8e26-8e27, U+8e30-8e31, U+8e33-8e39, U+8e3d, U+8e40-8e42, U+8e44, U+8e47-8e50, U+8e54-8e55, U+8e59, U+8e5b-8e64, U+8e69, U+8e6c-8e6d, U+8e6f-8e72, U+8e75-8e77, U+8e79-8e7c, U+8e81-8e85, U+8e89, U+8e8b, U+8e90-8e95, U+8e98-8e9b, U+8e9d-8e9e, U+8ea1-8ea2, U+8ea7, U+8ea9-8eaa, U+8eac-8eb1, U+8eb3, U+8eb5-8eb6, U+8eba-8ebb, U+8ebe, U+8ec0-8ec1, U+8ec3-8ec8, U+8ecb, U+8ecf, U+8ed1, U+8ed4, U+8edb-8edc, U+8ee3, U+8ee8, U+8eeb, U+8eed-8eee, U+8ef0-8ef1, U+8ef7, U+8ef9-8efc, U+8efe, U+8f00, U+8f02, U+8f05, U+8f07-8f08, U+8f0a, U+8f0f-8f10, U+8f12-8f13, U+8f15-8f19, U+8f1b-8f1c, U+8f1e-8f21, U+8f23, U+8f25-8f28, U+8f2b-8f2f, U+8f33-8f37, U+8f39-8f3b, U+8f3e;
    }
    /* [15] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.15.woff2) format('woff2');
      unicode-range: U+8b11, U+8b14, U+8b16, U+8b1a, U+8b1c, U+8b1e-8b20, U+8b26, U+8b28, U+8b2b-8b2d, U+8b30, U+8b37, U+8b3c, U+8b3e, U+8b41-8b46, U+8b48-8b49, U+8b4c-8b4f, U+8b51-8b54, U+8b56, U+8b59, U+8b5b, U+8b5e-8b5f, U+8b63, U+8b69, U+8b6b-8b6d, U+8b6f, U+8b71, U+8b74, U+8b76, U+8b78-8b79, U+8b7c-8b81, U+8b84-8b85, U+8b8a-8b8f, U+8b92-8b96, U+8b99-8b9a, U+8b9c-8ba0, U+8c38-8c3a, U+8c3d-8c3f, U+8c41, U+8c45, U+8c47-8c49, U+8c4b-8c4c, U+8c4e-8c51, U+8c53-8c55, U+8c57-8c59, U+8c5b, U+8c5d, U+8c62-8c64, U+8c66, U+8c68-8c69, U+8c6b-8c6d, U+8c73, U+8c75-8c76, U+8c78, U+8c7a-8c7c, U+8c7e, U+8c82, U+8c85-8c87, U+8c89-8c8b, U+8c8d-8c8e, U+8c90, U+8c92-8c94, U+8c98-8c99, U+8c9b-8c9c, U+8c9f, U+8ca4, U+8cad-8cae, U+8cb2-8cb3, U+8cb6, U+8cb9-8cba, U+8cbd, U+8cc1-8cc2, U+8cc4-8cc6, U+8cc8-8cc9, U+8ccb, U+8ccd-8ccf, U+8cd2, U+8cd5-8cd6, U+8cd9-8cda, U+8cdd, U+8ce1, U+8ce3-8ce4, U+8ce6, U+8ce8, U+8cec, U+8cef-8cf2, U+8cf4-8cf5, U+8cf7-8cf8, U+8cfa-8cfb, U+8cfd-8cff, U+8d01, U+8d03-8d04, U+8d07, U+8d09-8d0b, U+8d0d-8d10, U+8d12-8d14, U+8d16-8d17, U+8d1b-8d1d, U+8d65, U+8d67, U+8d69, U+8d6b-8d6e, U+8d71, U+8d73, U+8d76, U+8d7f, U+8d81-8d82, U+8d84, U+8d88, U+8d8d, U+8d90-8d91, U+8d95, U+8d99, U+8d9e-8da0;
    }
    /* [16] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.16.woff2) format('woff2');
      unicode-range: U+8962-8964, U+8966, U+896a-896b, U+896d-8970, U+8973-8975, U+8977, U+897a-897e, U+8980, U+8983, U+8988-898a, U+898d, U+8990, U+8993-8995, U+8998, U+899b-899c, U+899f-89a1, U+89a5-89a6, U+89a9, U+89ac, U+89af-89b0, U+89b2, U+89b4-89b7, U+89ba, U+89bc-89bd, U+89bf-89c1, U+89d4-89d8, U+89da, U+89dc-89dd, U+89e5, U+89e7, U+89e9, U+89eb, U+89ed, U+89f1, U+89f3-89f4, U+89f6, U+89f8-89f9, U+89fd, U+89ff, U+8a01, U+8a04-8a05, U+8a07, U+8a0c, U+8a0f-8a12, U+8a14-8a16, U+8a1b, U+8a1d-8a1e, U+8a20-8a22, U+8a24-8a26, U+8a2b-8a2c, U+8a2f, U+8a35-8a37, U+8a3b, U+8a3d-8a3e, U+8a40-8a41, U+8a43, U+8a45-8a49, U+8a4d-8a4e, U+8a51-8a54, U+8a56-8a58, U+8a5b-8a5d, U+8a61-8a62, U+8a65, U+8a67, U+8a6c-8a6d, U+8a75-8a77, U+8a79-8a7c, U+8a7e-8a80, U+8a82-8a86, U+8a8b, U+8a8f-8a92, U+8a96-8a97, U+8a99-8a9a, U+8a9f, U+8aa1, U+8aa3, U+8aa5-8aaa, U+8aae-8aaf, U+8ab3, U+8ab6-8ab7, U+8abb-8abc, U+8abe, U+8ac2-8ac4, U+8ac6, U+8ac8-8aca, U+8acc-8acd, U+8ad0-8ad5, U+8ad7, U+8ada-8ae2, U+8ae4, U+8ae7, U+8aeb-8aec, U+8aee, U+8af0-8af1, U+8af3-8af7, U+8afa, U+8afc, U+8aff, U+8b01-8b02, U+8b04-8b07, U+8b0a-8b0d, U+8b0f-8b10;
    }
    /* [17] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.17.woff2) format('woff2');
      unicode-range: U+87d0, U+87d2, U+87d5-87d6, U+87d9-87da, U+87dc, U+87df-87e0, U+87e2-87e6, U+87ea-87ed, U+87ef, U+87f1, U+87f3, U+87f5-87f8, U+87fa-87fb, U+87fe-87ff, U+8801, U+8803, U+8805-8807, U+8809-880b, U+880d-8816, U+8818-881c, U+881e-881f, U+8821-8822, U+8827-8828, U+882d-882e, U+8830-8832, U+8835-8836, U+8839-883c, U+8841-8845, U+8848-884b, U+884d-884e, U+8851-8852, U+8855-8856, U+8858-885a, U+885c, U+885e-8860, U+8862, U+8864, U+8869, U+886b, U+886e-886f, U+8871-8872, U+8875, U+8877, U+8879, U+887b, U+887d-887e, U+8880-8882, U+8888, U+888d, U+8892, U+8897-889c, U+889e-88a0, U+88a2, U+88a4, U+88a8, U+88aa, U+88ae, U+88b0-88b1, U+88b5, U+88b7, U+88ba, U+88bc-88c0, U+88c3-88c4, U+88c6, U+88ca-88ce, U+88d1-88d4, U+88d8-88d9, U+88db, U+88dd-88e1, U+88e7-88e8, U+88ef-88f2, U+88f4-88f5, U+88f7, U+88f9, U+88fc, U+8901-8902, U+8904, U+8906, U+890a, U+890c-890f, U+8913, U+8915-8916, U+8918-891a, U+891c-891e, U+8920, U+8925-8928, U+892a-892b, U+8930-8932, U+8935-893b, U+893e, U+8940-8946, U+8949, U+894c-894d, U+894f, U+8952, U+8956-8957, U+895a-895c, U+895e, U+8960-8961;
    }
    /* [18] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.18.woff2) format('woff2');
      unicode-range: U+8640-8642, U+8646, U+864d, U+8652-8659, U+865b, U+865d-8664, U+8667, U+8669, U+866c, U+866f, U+8671, U+8675-8677, U+867a-867b, U+867d, U+8687-8689, U+868b-868d, U+8691, U+8693, U+8695-8696, U+8698, U+869a, U+869c-869d, U+86a1, U+86a3-86a4, U+86a6-86ab, U+86ad, U+86af-86b1, U+86b3-86b9, U+86bf-86c1, U+86c3-86c6, U+86c9, U+86cb, U+86ce, U+86d1-86d2, U+86d4-86d5, U+86d7, U+86da, U+86dc, U+86de-86e0, U+86e3-86e7, U+86e9, U+86ec-86ed, U+86ef, U+86f8-86fe, U+8700, U+8703-870b, U+870d-8714, U+8719-871a, U+871e-871f, U+8721-8723, U+8725, U+8728-8729, U+872e-872f, U+8731-8732, U+8734, U+8737, U+8739-8740, U+8743, U+8745, U+8749, U+874b-874e, U+8751, U+8753, U+8755, U+8757-8759, U+875d, U+875f-8761, U+8763-8766, U+8768, U+876a, U+876e-876f, U+8771-8772, U+8774, U+8778, U+877b-877c, U+877f, U+8782-8789, U+878b-878c, U+878e, U+8790, U+8793, U+8795, U+8797-8799, U+879e-87a0, U+87a2-87a3, U+87a7, U+87ab-87af, U+87b1, U+87b3, U+87b5, U+87bb, U+87bd-87c1, U+87c4, U+87c6-87cb, U+87ce;
    }
    /* [19] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.19.woff2) format('woff2');
      unicode-range: U+84a6, U+84a8-84aa, U+84ad, U+84af, U+84b1, U+84b4, U+84b9-84bb, U+84bd-84c2, U+84c6-84ca, U+84cc-84d1, U+84d3, U+84d6, U+84d9-84da, U+84dc, U+84e7, U+84ea, U+84ec, U+84ef-84f2, U+84f4, U+84f7, U+84fa-84fd, U+84ff-8500, U+8502-8503, U+8506-8507, U+850c, U+850e, U+8510, U+8514-8515, U+8517-8518, U+851a-851c, U+851e-851f, U+8521-8525, U+8527, U+852a-852c, U+852f, U+8532-8534, U+8536, U+853e-8541, U+8543, U+8546, U+8548, U+854a-854b, U+854f-8553, U+8555-855a, U+855c-8564, U+8569-856b, U+856d, U+856f, U+8577, U+8579-857b, U+857d-8581, U+8585-8586, U+8588-858c, U+858f-8591, U+8593, U+8597-8598, U+859b-859d, U+859f-85a0, U+85a2, U+85a4-85a5, U+85a7-85a8, U+85ad-85b0, U+85b4, U+85b6-85ba, U+85bc-85bf, U+85c1-85c2, U+85c7, U+85c9-85cb, U+85ce-85d0, U+85d5, U+85d8-85da, U+85dc, U+85df-85e1, U+85e5-85e6, U+85e8, U+85ed, U+85f3-85f4, U+85f6-85f7, U+85f9-85fa, U+85fc, U+85fe-8600, U+8602, U+8604-8606, U+860a-860b, U+860d-860e, U+8610-8613, U+8616-861b, U+861e, U+8621-8622, U+8624, U+8627, U+8629, U+862f-8630, U+8636, U+8638-863a, U+863c-863d, U+863f;
    }
    /* [20] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.20.woff2) format('woff2');
      unicode-range: U+82e0-82e4, U+82e7-82e8, U+82ea, U+82ed, U+82ef, U+82f3-82f4, U+82f6-82f7, U+82f9, U+82fb, U+82fd-82fe, U+8300-8301, U+8303, U+8306-8308, U+830a-830c, U+8316-8318, U+831b, U+831d-831f, U+8321-8323, U+832b-8335, U+8337, U+833a, U+833c-833d, U+8340, U+8342-8347, U+834a, U+834d-8351, U+8353-8357, U+835a, U+8362-8363, U+8370, U+8373, U+8375, U+8378, U+837c-837d, U+837f-8380, U+8382, U+8384-8387, U+838a, U+838d-838e, U+8392-8396, U+8398-83a0, U+83a2, U+83a6-83ad, U+83b1, U+83b5, U+83bd-83c1, U+83c7, U+83c9, U+83ce-83d1, U+83d4, U+83d6, U+83d8, U+83dd, U+83df-83e1, U+83e5, U+83e8, U+83ea-83eb, U+83f0, U+83f2, U+83f4, U+83f6-83f9, U+83fb-83fd, U+8401, U+8403-8404, U+8406-8407, U+840a-840b, U+840d, U+840f, U+8411, U+8413, U+8415, U+8417, U+8419, U+8420, U+8422, U+842a, U+842f, U+8431, U+8435, U+8438-8439, U+843c, U+8445-8448, U+844a, U+844d-844f, U+8451-8452, U+8456, U+8458-845a, U+845c, U+845f-8462, U+8464-8467, U+8469-846b, U+846d-8470, U+8473-8474, U+8476-847a, U+847c-847d, U+8481-8482, U+8484-8485, U+848b, U+8490, U+8492-8493, U+8495, U+8497, U+849c, U+849e-849f, U+84a1;
    }
    /* [21] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.21.woff2) format('woff2');
      unicode-range: U+813e, U+8141, U+8145-8147, U+814a, U+814c, U+8151-8153, U+8157, U+815f-8161, U+8165-8169, U+816d-816f, U+8171, U+8173-8174, U+8177, U+8180-8186, U+8188, U+818a-818b, U+818e, U+8190, U+8193, U+8195-8196, U+8198, U+819b, U+819e, U+81a0, U+81a2, U+81a4, U+81a9, U+81ae, U+81b0, U+81b2, U+81b4-81b5, U+81b8, U+81ba-81bb, U+81bd-81be, U+81c0-81c3, U+81c5-81c6, U+81c8-81cb, U+81cd-81cf, U+81d1, U+81d5-81db, U+81dd-81e1, U+81e4-81e5, U+81e7, U+81eb-81ec, U+81ef-81f2, U+81f5-81f6, U+81f8-81fb, U+81fd-8205, U+8209-820b, U+820d, U+820f, U+8212-8214, U+8216, U+8219-821d, U+8221-8222, U+8228-8229, U+822b, U+822e, U+8232-8235, U+8237-8238, U+823a, U+823c, U+8240, U+8243-8246, U+8249, U+824b, U+824e-824f, U+8251, U+8256-825a, U+825c-825d, U+825f-8260, U+8262-8264, U+8267-8268, U+826a-826b, U+826d-826e, U+8271, U+8274, U+8277, U+8279, U+827b, U+827d-8281, U+8283-8284, U+8287, U+8289-828a, U+828d-828e, U+8291-8294, U+8296, U+8298-829b, U+829f-82a1, U+82a3-82a4, U+82a7-82ac, U+82ae, U+82b0, U+82b2, U+82b4, U+82b7, U+82ba-82bc, U+82be-82bf, U+82c5-82c6, U+82d0, U+82d2-82d3, U+82d5, U+82d9-82da, U+82dc, U+82de-82df;
    }
    /* [22] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.22.woff2) format('woff2');
      unicode-range: U+7f68-7f69, U+7f6b, U+7f6d, U+7f71, U+7f77-7f79, U+7f7d-7f80, U+7f82-7f83, U+7f86-7f88, U+7f8b-7f8d, U+7f8f-7f91, U+7f94, U+7f96-7f97, U+7f9a, U+7f9c-7f9d, U+7fa1-7fa3, U+7fa6, U+7faa, U+7fad-7faf, U+7fb2, U+7fb4, U+7fb6, U+7fb8-7fb9, U+7fbc, U+7fbf-7fc0, U+7fc3, U+7fc5-7fc6, U+7fc8, U+7fca, U+7fce-7fcf, U+7fd5, U+7fdb, U+7fdf, U+7fe1, U+7fe3, U+7fe5-7fe6, U+7fe8-7fe9, U+7feb-7fec, U+7fee-7ff0, U+7ff2-7ff3, U+7ff9-7ffa, U+7ffd-7fff, U+8002, U+8004, U+8006-8008, U+800a-800f, U+8011-8014, U+8016, U+8018-8019, U+801c-8021, U+8024, U+8026, U+8028, U+802c, U+802e, U+8030, U+8034-8035, U+8037, U+8039-8040, U+8043-8044, U+8046, U+804a, U+8052, U+8058, U+805a, U+805f-8060, U+8062, U+8064, U+8066, U+8068, U+806d, U+806f-8073, U+8075-8076, U+8079, U+807b, U+807d-8081, U+8084-8088, U+808b, U+808e, U+8093, U+8099-809a, U+809c, U+809e, U+80a4, U+80a6-80a7, U+80ab-80ad, U+80b1, U+80b8-80b9, U+80c4-80c5, U+80c8, U+80ca, U+80cd, U+80cf, U+80d2, U+80d4-80db, U+80dd, U+80e0, U+80e4-80e6, U+80ed-80f3, U+80f5-80f7, U+80f9-80fc, U+80fe, U+8103, U+8109, U+810b, U+810d, U+8116-8118, U+811b-811c, U+811e, U+8120, U+8123-8124, U+8127, U+8129, U+812b-812c, U+812f-8130, U+8135, U+8139-813a, U+813c-813d;
    }
    /* [23] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.23.woff2) format('woff2');
      unicode-range: U+7d51, U+7d53, U+7d55-7d57, U+7d59-7d5d, U+7d63, U+7d65, U+7d67, U+7d6a, U+7d6e, U+7d70, U+7d72-7d73, U+7d78, U+7d7a-7d7b, U+7d7d, U+7d7f, U+7d81-7d83, U+7d85-7d86, U+7d88-7d89, U+7d8b-7d8d, U+7d8f, U+7d91, U+7d93, U+7d96-7d97, U+7d9b-7da0, U+7da2-7da3, U+7da6-7da7, U+7daa-7dac, U+7dae-7db0, U+7db3, U+7db5-7db9, U+7dbd, U+7dc0, U+7dc2-7dc7, U+7dcc-7dce, U+7dd0, U+7dd5-7dd9, U+7ddc-7dde, U+7de1-7de6, U+7dea-7ded, U+7df1-7df2, U+7df5-7df6, U+7df9-7dfa, U+7e00, U+7e05, U+7e08-7e0b, U+7e10-7e12, U+7e15, U+7e17, U+7e1c-7e1d, U+7e1f-7e23, U+7e27-7e28, U+7e2c-7e2d, U+7e2f, U+7e31-7e33, U+7e35-7e37, U+7e39-7e3b, U+7e3d, U+7e3f, U+7e43-7e48, U+7e4e, U+7e50, U+7e52, U+7e56, U+7e58-7e5a, U+7e5d-7e5f, U+7e61-7e62, U+7e65-7e67, U+7e69-7e6b, U+7e6d-7e6f, U+7e73, U+7e75, U+7e78-7e79, U+7e7b-7e7f, U+7e81-7e83, U+7e86-7e8a, U+7e8c-7e8e, U+7e90-7e96, U+7e98, U+7e9a-7e9f, U+7f38, U+7f3a-7f3f, U+7f43-7f45, U+7f47, U+7f4c-7f50, U+7f52-7f55, U+7f58, U+7f5b-7f5d, U+7f5f, U+7f61, U+7f63-7f67;
    }
    /* [24] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.24.woff2) format('woff2');
      unicode-range: U+7bc2, U+7bc5-7bc6, U+7bc8, U+7bca-7bcc, U+7bcf, U+7bd4, U+7bd6-7bd7, U+7bd9-7bdb, U+7bdd, U+7be5-7be6, U+7be8-7bea, U+7bf0, U+7bf2-7bfa, U+7bfc, U+7bfe, U+7c00-7c04, U+7c06-7c07, U+7c09, U+7c0b-7c0f, U+7c11-7c14, U+7c17, U+7c19, U+7c1b, U+7c1e-7c20, U+7c23, U+7c25-7c28, U+7c2a-7c2c, U+7c2f, U+7c31, U+7c33-7c34, U+7c36-7c3a, U+7c3d-7c3e, U+7c40, U+7c42-7c43, U+7c45-7c46, U+7c4a, U+7c4c, U+7c4f-7c5f, U+7c61, U+7c63-7c65, U+7c67, U+7c69, U+7c6c-7c70, U+7c72, U+7c75, U+7c79, U+7c7b-7c7e, U+7c81-7c83, U+7c86-7c87, U+7c8d, U+7c8f-7c90, U+7c94, U+7c9e, U+7ca0-7ca2, U+7ca4-7ca6, U+7ca8, U+7cab, U+7cad-7cae, U+7cb0-7cb3, U+7cb6-7cb7, U+7cb9-7cbd, U+7cbf-7cc0, U+7cc2, U+7cc4-7cc5, U+7cc7-7cca, U+7ccd-7ccf, U+7cd2-7cd5, U+7cd7-7cda, U+7cdc-7cdd, U+7cdf-7ce0, U+7ce2, U+7ce6, U+7ce9, U+7ceb, U+7cef, U+7cf2, U+7cf4-7cf6, U+7cf9-7cfa, U+7cfe, U+7d02-7d03, U+7d06-7d0a, U+7d0f, U+7d11-7d13, U+7d15-7d16, U+7d1c-7d1e, U+7d23, U+7d26, U+7d2a, U+7d2c-7d2e, U+7d31-7d32, U+7d35, U+7d3c-7d41, U+7d43, U+7d45, U+7d47-7d48, U+7d4b, U+7d4d-7d4f;
    }
    /* [25] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.25.woff2) format('woff2');
      unicode-range: U+7a11, U+7a15, U+7a17-7a19, U+7a1b, U+7a1e-7a21, U+7a27, U+7a2b, U+7a2d, U+7a2f-7a31, U+7a34-7a35, U+7a37-7a3b, U+7a3e, U+7a43-7a49, U+7a4c, U+7a4e, U+7a50, U+7a55-7a57, U+7a59, U+7a5c-7a5d, U+7a5f-7a63, U+7a65, U+7a67, U+7a69-7a6a, U+7a6d, U+7a70, U+7a75, U+7a78-7a79, U+7a7d-7a7e, U+7a80, U+7a82, U+7a84-7a86, U+7a88, U+7a8a-7a8b, U+7a90-7a91, U+7a94-7a98, U+7a9e, U+7aa0, U+7aa3, U+7aa9, U+7aac, U+7ab0, U+7ab3, U+7ab5-7ab6, U+7ab9-7abf, U+7ac3, U+7ac5-7aca, U+7acc-7acf, U+7ad1-7ad3, U+7ad5, U+7ada-7adb, U+7add, U+7adf, U+7ae1-7ae2, U+7ae6-7aed, U+7af0-7af1, U+7af4, U+7af8, U+7afa-7afb, U+7afd-7afe, U+7b02, U+7b04, U+7b06-7b08, U+7b0a-7b0b, U+7b0f, U+7b12, U+7b14, U+7b18-7b19, U+7b1e-7b1f, U+7b23, U+7b25, U+7b27-7b2b, U+7b2d-7b31, U+7b33-7b36, U+7b3b, U+7b3d, U+7b3f-7b41, U+7b45, U+7b47, U+7b4c-7b50, U+7b53, U+7b55, U+7b5d, U+7b60, U+7b64-7b66, U+7b69-7b6a, U+7b6c-7b75, U+7b77, U+7b79-7b7a, U+7b7f, U+7b84, U+7b86, U+7b89, U+7b8d-7b92, U+7b96, U+7b98-7ba0, U+7ba5, U+7bac-7bad, U+7baf-7bb0, U+7bb2, U+7bb4-7bb6, U+7bba-7bbd, U+7bc1;
    }
    /* [26] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.26.woff2) format('woff2');
      unicode-range: U+784f, U+7851-7852, U+785c, U+785e, U+7860-7861, U+7863-7864, U+7868, U+786a, U+786e-786f, U+7872, U+7874, U+787a, U+787c, U+787e, U+7886-7887, U+788a, U+788c-788f, U+7893-7895, U+7898, U+789a, U+789d-789f, U+78a1, U+78a3-78a4, U+78a8-78aa, U+78ac-78ad, U+78af-78b3, U+78b5, U+78bb-78bf, U+78c5-78cc, U+78ce, U+78d1-78d6, U+78da-78db, U+78df-78e1, U+78e4, U+78e6-78e7, U+78ea, U+78ec, U+78f2-78f4, U+78f6-78f7, U+78f9-78fb, U+78fd-7901, U+7906-7907, U+790c, U+7910-7912, U+7919-791c, U+791e-7920, U+7925-792e, U+7930-7931, U+7934-7935, U+793b, U+793d, U+793f, U+7941-7942, U+7944-7946, U+794a-794b, U+794f, U+7951, U+7954-7955, U+7957-7958, U+795a-795c, U+795f-7960, U+7962, U+7967, U+7969, U+796b, U+7972, U+7977, U+7979-797c, U+797e-7980, U+798a-798e, U+7991, U+7993-7996, U+7998, U+799b-799d, U+79a1, U+79a6-79ab, U+79ae-79b1, U+79b3-79b4, U+79b8-79bb, U+79bd-79be, U+79c2, U+79c4, U+79c7-79ca, U+79cc-79cd, U+79cf, U+79d4-79d6, U+79da, U+79dd-79e3, U+79e5, U+79e7, U+79ea-79ed, U+79f1, U+79f8, U+79fc, U+7a02-7a03, U+7a05, U+7a07-7a0a, U+7a0c-7a0d;
    }
    /* [27] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.27.woff2) format('woff2');
      unicode-range: U+768c-768e, U+7690, U+7693, U+7695-7696, U+7699-76a8, U+76aa, U+76ad, U+76af-76b0, U+76b4, U+76b6-76ba, U+76bd, U+76c1-76c3, U+76c5, U+76c8-76c9, U+76cb-76ce, U+76d2, U+76d4, U+76d6, U+76d9, U+76dc, U+76de, U+76e0-76e1, U+76e5-76e8, U+76ea-76ec, U+76f0-76f1, U+76f6, U+76f9, U+76fb-76fc, U+7700, U+7704, U+7706-7708, U+770a, U+770e, U+7712, U+7714-7715, U+7717, U+7719-771c, U+7722, U+7724-7726, U+7728, U+772d-772f, U+7734-7739, U+773d-773e, U+7742, U+7745-7747, U+774a, U+774d-774f, U+7752, U+7756-7758, U+775a-775c, U+775e-7760, U+7762, U+7764-7765, U+7767, U+776a-776c, U+7770, U+7772-7774, U+7779-777a, U+777c-7780, U+7784, U+778b-778e, U+7794-7796, U+779a, U+779e-77a0, U+77a2, U+77a4-77a5, U+77a7, U+77a9-77aa, U+77ae-77b1, U+77b5-77b7, U+77b9, U+77bb-77bf, U+77c3, U+77c7, U+77c9, U+77cd, U+77d1-77d2, U+77d5, U+77d7, U+77d9-77da, U+77dc, U+77de-77e0, U+77e3-77e4, U+77e6-77e7, U+77e9-77ea, U+77ec, U+77ee, U+77f0-77f1, U+77f4, U+77f8, U+77fb-77fc, U+7805-7806, U+7809, U+780c-780e, U+7811-7812, U+7819, U+781d, U+7820-7823, U+7826-7827, U+782c-782e, U+7830, U+7835, U+7837, U+783a, U+783f, U+7843-7845, U+7847-7848, U+784c, U+784e;
    }
    /* [28] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.28.woff2) format('woff2');
      unicode-range: U+7512-7513, U+7515-7517, U+751c, U+751e, U+7520-7522, U+7524, U+7526-7527, U+7529-752c, U+752f, U+7536, U+7538-7539, U+753c-7540, U+7543-7544, U+7546-754b, U+754d-7550, U+7552, U+7557, U+755a-755b, U+755d-755f, U+7561-7562, U+7564, U+7566-7567, U+7569, U+756b-756d, U+756f, U+7571-7572, U+7574-757e, U+7581-7582, U+7585-7587, U+7589-758c, U+758f-7590, U+7592-7595, U+7599-759a, U+759c-759d, U+75a2-75a5, U+75b0-75b1, U+75b3-75b5, U+75b7-75b8, U+75ba, U+75bd, U+75bf-75c4, U+75c6, U+75ca, U+75cc-75cf, U+75d3-75d4, U+75d7-75d8, U+75dc-75e1, U+75e3-75e4, U+75e7, U+75ec, U+75ee-75f3, U+75f9, U+75fc, U+75fe-7604, U+7607-760c, U+760f, U+7612-7613, U+7615-7616, U+7618-7619, U+761b-7629, U+762d, U+7630, U+7632-7635, U+7638-763c, U+7640-7641, U+7643-764b, U+764e, U+7655, U+7658-7659, U+765c, U+765f, U+7661-7662, U+7664-7665, U+7667-766a, U+766c-7672, U+7674, U+7676, U+7678, U+7680-7683, U+7685, U+7688, U+768b;
    }
    /* [29] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.29.woff2) format('woff2');
      unicode-range: U+736f-7371, U+7375, U+7377-737c, U+7380-7381, U+7383, U+7385-7386, U+738a, U+738e, U+7390, U+7393-7398, U+739c, U+739e-73a0, U+73a2, U+73a5-73a6, U+73a8, U+73aa-73ab, U+73ad, U+73b3, U+73b5, U+73b7, U+73b9-73bd, U+73bf, U+73c5-73c6, U+73c9-73cc, U+73ce-73cf, U+73d2-73d3, U+73d6, U+73d9, U+73dd-73de, U+73e1, U+73e3-73e7, U+73e9-73ea, U+73ee, U+73f1, U+73f4-73f5, U+73f7-73fb, U+73fd, U+73ff-7401, U+7404-7405, U+7407, U+740a, U+7411, U+7413, U+741a-741b, U+7421, U+7424, U+7426, U+7428-7431, U+7433, U+7439-743a, U+743f-7441, U+7443-7444, U+7446-7447, U+744b, U+744d, U+7451-7453, U+7455, U+7457, U+7459-745a, U+745c-745d, U+745f, U+7462-7464, U+7466-746b, U+746d-7473, U+7476, U+747e, U+7480-7481, U+7485-7489, U+748b, U+748f-7492, U+7497-749a, U+749c, U+749e-74a3, U+74a5-74a6, U+74a8-74ab, U+74ae-74af, U+74b1-74b2, U+74b5, U+74b9-74bb, U+74bd, U+74bf, U+74c8-74ca, U+74cc, U+74cf-74d0, U+74d3-74d4, U+74d6, U+74d8, U+74da-74db, U+74de-74e0, U+74e3-74e4, U+74e7-74eb, U+74ee-74f2, U+74f4, U+74f7-74f8, U+74fa-74fc, U+74ff, U+7501, U+7503-7506, U+750c-750e, U+7511;
    }
    /* [30] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.30.woff2) format('woff2');
      unicode-range: U+7179, U+7180, U+7184-7185, U+7187-7188, U+718c, U+718f, U+7192, U+7194-7196, U+7199-719b, U+71a0, U+71a2, U+71a8, U+71ac, U+71ae-71b0, U+71b2-71b3, U+71b9-71ba, U+71be-71c1, U+71c4, U+71c9, U+71cb-71cc, U+71ce, U+71d0, U+71d2-71d4, U+71d6-71d7, U+71d9-71da, U+71dc, U+71df-71e0, U+71e6-71e7, U+71ec-71ee, U+71f4-71f5, U+71f8-71f9, U+71fc, U+71fe-7200, U+7207-7209, U+720d, U+7210, U+7213, U+7215, U+7217, U+721a, U+721d, U+721f, U+7224, U+7228, U+722b, U+722d, U+722f-7230, U+7232, U+7234, U+7238-7239, U+723b-723c, U+723e-7243, U+7245-7246, U+724b, U+724e-7250, U+7252-7253, U+7255-7258, U+725a, U+725c, U+725e, U+7260, U+7263, U+7268, U+726b, U+726e-726f, U+7271, U+7274, U+7277-7278, U+727b-727c, U+727e-7282, U+7284, U+7287, U+7289, U+728d-728e, U+7292-7293, U+7296, U+729b, U+72a2, U+72a7-72a8, U+72ad-72ae, U+72b0-72b2, U+72b4, U+72b9, U+72be, U+72c0-72c1, U+72c3-72c4, U+72c6-72c7, U+72c9, U+72cc, U+72ce, U+72d2, U+72d5-72d6, U+72d8, U+72df-72e2, U+72e5, U+72f3-72f4, U+72f7, U+72f9-72fb, U+72fd-72fe, U+7302, U+7304-7305, U+7307, U+730a-730b, U+730d, U+7312-7313, U+7316-7319, U+731c-731e, U+7322, U+7324, U+7327-7329, U+732c, U+732f, U+7331-7337, U+7339-733b, U+733d-733e, U+7343, U+734d-7350, U+7352, U+7356-7358, U+735d-7360, U+7366-736c, U+736e;
    }
    /* [31] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.31.woff2) format('woff2');
      unicode-range: U+6f5d-6f5e, U+6f60-6f62, U+6f66, U+6f68, U+6f6c-6f6d, U+6f6f, U+6f74, U+6f78, U+6f7a, U+6f7c-6f7e, U+6f80, U+6f82-6f83, U+6f86-6f88, U+6f8b-6f8e, U+6f90-6f94, U+6f96-6f98, U+6f9a, U+6f9d, U+6f9f-6fa1, U+6fa3, U+6fa5-6fa8, U+6fae-6fb1, U+6fb3, U+6fb5-6fb7, U+6fb9, U+6fbc, U+6fbe, U+6fc2, U+6fc5-6fca, U+6fd4-6fd5, U+6fd8, U+6fda-6fdb, U+6fde-6fe0, U+6fe4, U+6fe8-6fe9, U+6feb-6fec, U+6fee, U+6ff0, U+6ff3, U+6ff5-6ff6, U+6ff9-6ffa, U+6ffc-6ffe, U+7000-7001, U+7005-7007, U+7009-700b, U+700d, U+700f, U+7011, U+7015, U+7017-7018, U+701a-701b, U+701d-7020, U+7023, U+7026, U+7028, U+702f-7030, U+7032, U+7034, U+7037, U+7039-703a, U+703c, U+703e, U+7043-7044, U+7047-704c, U+704e, U+7051, U+7054-7055, U+705d-705e, U+7064-7065, U+7069, U+706c, U+706e, U+7075-7076, U+707e, U+7081, U+7085-7086, U+7094-7098, U+709b, U+709f, U+70a4, U+70ab-70ac, U+70ae-70b1, U+70b3-70b4, U+70b7, U+70bb, U+70ca-70cb, U+70d1, U+70d3-70d6, U+70d8-70d9, U+70dc-70dd, U+70df, U+70e4, U+70ec, U+70f1, U+70fa, U+70fd, U+7103-7108, U+710b-710c, U+710f, U+7114, U+7119, U+711c, U+711e, U+7120, U+712b, U+712d-7131, U+7138, U+7141, U+7145-7147, U+7149-714b, U+7150-7153, U+7155-7157, U+715a, U+715c, U+715e, U+7160, U+7162, U+7164-7166, U+7168, U+716c;
    }
    /* [32] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.32.woff2) format('woff2');
      unicode-range: U+6d87, U+6d89-6d8a, U+6d8c-6d8e, U+6d91-6d98, U+6d9c, U+6daa-6dac, U+6dae, U+6db4-6db5, U+6db7-6db9, U+6dbd, U+6dbf, U+6dc2, U+6dc4-6dc8, U+6dca, U+6dcc, U+6dce-6dd0, U+6dd2, U+6dd5-6dd6, U+6dd8-6ddb, U+6ddd-6de0, U+6de2, U+6de4-6de6, U+6de8-6dea, U+6dec, U+6dee-6df0, U+6df2, U+6df4, U+6df6, U+6df8-6dfa, U+6dfc, U+6e00, U+6e04, U+6e0a, U+6e17, U+6e19, U+6e1d-6e20, U+6e22-6e25, U+6e27, U+6e2b, U+6e2d-6e2e, U+6e32, U+6e34, U+6e36, U+6e38-6e3c, U+6e42-6e45, U+6e48-6e49, U+6e4b-6e4f, U+6e51-6e54, U+6e57, U+6e5b-6e5f, U+6e62-6e63, U+6e68, U+6e6b, U+6e6e, U+6e72-6e73, U+6e76, U+6e7b, U+6e7d, U+6e82, U+6e89, U+6e8c-6e8d, U+6e8f, U+6e93, U+6e98-6e99, U+6e9f-6ea0, U+6ea5, U+6ea7, U+6eaa-6eab, U+6ead-6eaf, U+6eb1-6eb4, U+6eb7, U+6ebb-6ebd, U+6ebf-6ec4, U+6ec7-6eca, U+6ecc-6ecf, U+6ed3-6ed5, U+6ed9-6edb, U+6ee6, U+6eeb-6eef, U+6ef7-6ef9, U+6efb, U+6efd-6eff, U+6f04, U+6f08-6f0a, U+6f0c-6f0d, U+6f10-6f11, U+6f13, U+6f15-6f16, U+6f18, U+6f1a-6f1b, U+6f25-6f26, U+6f29-6f2a, U+6f2d, U+6f2f-6f33, U+6f35-6f36, U+6f38, U+6f3b-6f3c, U+6f3e-6f3f, U+6f41, U+6f45, U+6f4f, U+6f51-6f53, U+6f57-6f5b;
    }
    /* [33] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.33.woff2) format('woff2');
      unicode-range: U+6b9b, U+6b9e-6ba0, U+6ba2-6ba4, U+6ba8-6bb3, U+6bb7-6bb9, U+6bbc-6bbe, U+6bc0, U+6bc3-6bc4, U+6bc6-6bc9, U+6bcb-6bcc, U+6bcf, U+6bd3, U+6bd6-6bd8, U+6bda, U+6bdf, U+6be1, U+6be3, U+6be6-6be7, U+6beb-6bec, U+6bee, U+6bf1, U+6bf3, U+6bf7, U+6bf9, U+6bff, U+6c02, U+6c04-6c05, U+6c08-6c0a, U+6c0d-6c0e, U+6c10, U+6c12-6c14, U+6c19, U+6c1b, U+6c1f, U+6c24, U+6c26-6c28, U+6c2c, U+6c2e, U+6c33, U+6c35-6c36, U+6c3a-6c3b, U+6c3e-6c40, U+6c4a-6c4b, U+6c4d, U+6c4f, U+6c52, U+6c54-6c55, U+6c59, U+6c5b-6c5e, U+6c62, U+6c67-6c68, U+6c6a-6c6b, U+6c6d, U+6c6f, U+6c73-6c74, U+6c76, U+6c78-6c79, U+6c7b, U+6c7e, U+6c81-6c87, U+6c89, U+6c8c-6c8d, U+6c90, U+6c92-6c95, U+6c97-6c98, U+6c9a-6c9c, U+6c9f, U+6caa-6cae, U+6cb0-6cb2, U+6cb4, U+6cba, U+6cbd-6cbe, U+6cc2, U+6cc5-6cc6, U+6ccd, U+6ccf-6cd4, U+6cd6-6cd7, U+6cd9-6cdd, U+6ce0, U+6ce7, U+6ce9-6cef, U+6cf1-6cf2, U+6cf4, U+6cfb, U+6d00-6d01, U+6d04, U+6d07, U+6d0a, U+6d0c, U+6d0e-6d0f, U+6d11, U+6d13, U+6d19-6d1a, U+6d1f, U+6d24, U+6d26-6d28, U+6d2b, U+6d2e-6d2f, U+6d31, U+6d33-6d36, U+6d38-6d39, U+6d3c-6d3d, U+6d3f, U+6d57-6d5b, U+6d5e-6d61, U+6d64-6d65, U+6d67, U+6d6c, U+6d6f-6d70, U+6d79, U+6d7c, U+6d80-6d82, U+6d85;
    }
    /* [34] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.34.woff2) format('woff2');
      unicode-range: U+69e9-69eb, U+69ed-69ef, U+69f1-69f6, U+69f9, U+69fe-6a01, U+6a03, U+6a05, U+6a0a, U+6a0c, U+6a0f, U+6a11-6a15, U+6a17, U+6a1a-6a1b, U+6a1d-6a20, U+6a22-6a24, U+6a28, U+6a2e, U+6a30, U+6a32-6a38, U+6a3b, U+6a3e-6a3f, U+6a44-6a4a, U+6a4e, U+6a50-6a52, U+6a54-6a56, U+6a5b, U+6a61-6a62, U+6a64, U+6a66-6a67, U+6a6a-6a6b, U+6a71-6a73, U+6a78, U+6a7a, U+6a7e-6a7f, U+6a81, U+6a83-6a84, U+6a86-6a87, U+6a89, U+6a8b, U+6a8d, U+6a90-6a91, U+6a94, U+6a97, U+6a9b, U+6a9d-6aa3, U+6aa5, U+6aaa-6aac, U+6aae-6ab1, U+6ab3-6ab4, U+6ab8, U+6abb, U+6abd-6abf, U+6ac1-6ac3, U+6ac6, U+6ac8-6ac9, U+6acc, U+6ad0-6ad1, U+6ad3-6ad6, U+6ada-6adf, U+6ae2, U+6ae4, U+6ae7-6ae8, U+6aea, U+6aec, U+6af0-6af3, U+6af8, U+6afa, U+6afc-6afd, U+6b02-6b03, U+6b06-6b07, U+6b09-6b0b, U+6b0f-6b12, U+6b16-6b17, U+6b1b, U+6b1d-6b1f, U+6b23-6b24, U+6b28, U+6b2b-6b2c, U+6b2f, U+6b35-6b39, U+6b3b, U+6b3d, U+6b3f, U+6b43, U+6b46-6b47, U+6b49-6b4a, U+6b4d-6b4e, U+6b50, U+6b52, U+6b54, U+6b56, U+6b58-6b59, U+6b5b, U+6b5d, U+6b5f-6b61, U+6b65, U+6b67, U+6b6b-6b6c, U+6b6e, U+6b70, U+6b72, U+6b75, U+6b77-6b7a, U+6b7d-6b85, U+6b89, U+6b8d, U+6b95, U+6b97-6b98;
    }
    /* [35] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.35.woff2) format('woff2');
      unicode-range: U+6867, U+686b, U+686e-6872, U+6874-6875, U+6877, U+6879-687c, U+687e-687f, U+6882-6884, U+6886, U+6888, U+688d-6890, U+6894, U+6896, U+6898-689c, U+689f-68a3, U+68a5-68a7, U+68a9-68ab, U+68ad-68af, U+68b2-68b5, U+68b9-68bc, U+68c3, U+68c5-68c6, U+68c8-68ca, U+68cc-68cd, U+68cf-68d1, U+68d3-68d9, U+68dc-68dd, U+68e0-68e1, U+68e3-68e5, U+68e7-68e8, U+68ea-68ed, U+68ef-68f1, U+68f5-68f7, U+68f9, U+68fb-68fd, U+6900-6901, U+6903-6904, U+6906-690c, U+690f-6911, U+6913, U+6916-6917, U+6919-691b, U+6921-6923, U+6925-6926, U+6928, U+692a, U+6930-6931, U+6933-6936, U+6938-6939, U+693b, U+693d, U+6942, U+6945-6946, U+6949, U+694e, U+6954, U+6957, U+6959, U+695b-695e, U+6961-6966, U+6968-696c, U+696e-6974, U+6977-697b, U+697e-6981, U+6986, U+698d, U+6991-6992, U+6994-6996, U+6998, U+699c, U+69a0-69a1, U+69a5-69a8, U+69ab, U+69ad, U+69af-69b2, U+69b4, U+69b7-69b8, U+69ba-69bc, U+69be-69c1, U+69c3, U+69c5, U+69c7-69c8, U+69ca, U+69ce-69d1, U+69d3, U+69d6-69d7, U+69d9, U+69dd-69de, U+69e2-69e3, U+69e5, U+69e7-69e8;
    }
    /* [36] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.36.woff2) format('woff2');
      unicode-range: U+668c-668e, U+6690, U+6692, U+6698-669d, U+669f-66a0, U+66a2, U+66a4, U+66ad, U+66b1-66b3, U+66b5, U+66b8-66b9, U+66bb-66bc, U+66be-66c4, U+66c6, U+66c8-66c9, U+66cc, U+66ce-66cf, U+66d4, U+66da-66db, U+66dd, U+66df-66e0, U+66e6, U+66e8-66e9, U+66eb-66ec, U+66ee, U+66f5, U+66f7, U+66fa-66fc, U+6701, U+6705, U+6707, U+670e-670f, U+6712-6716, U+6719, U+671c, U+671e, U+6720, U+6722, U+6725-6726, U+672e, U+6733, U+6735-6738, U+673e-673f, U+6741, U+6743, U+6745-6748, U+674c-674d, U+6753-6755, U+6759, U+675d-675e, U+6760, U+6762-6764, U+6766, U+676a, U+676c, U+676e, U+6770, U+6772-6774, U+6776-6777, U+677b-677c, U+6780-6781, U+6784-6785, U+6787, U+6789, U+678b-678c, U+678e-678f, U+6791-6793, U+6796, U+6798-6799, U+679b, U+67a1, U+67a4, U+67a6, U+67a9, U+67b0-67b5, U+67b7-67b9, U+67bb-67be, U+67c0-67c3, U+67c5-67c6, U+67c8-67c9, U+67ce, U+67d2, U+67d7-67d9, U+67db-67de, U+67e1-67e2, U+67e4, U+67e6-67e7, U+67e9, U+67ec, U+67ee-67f0, U+67f2, U+67f6-67f7, U+67f9-67fa, U+67fc, U+67fe, U+6801-6802, U+6805, U+6810, U+6814, U+6818-6819, U+681d, U+681f, U+6822, U+6827-6829, U+682b-682d, U+682f-6834, U+683b, U+683e-6840, U+6844-6846, U+6849-684a, U+684c-684e, U+6852-6855, U+6857-6859, U+685b, U+685d, U+685f, U+6863;
    }
    /* [37] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.37.woff2) format('woff2');
      unicode-range: U+64e3-64e5, U+64e7, U+64e9-64ea, U+64ed, U+64ef-64f2, U+64f4-64f7, U+64fa-64fb, U+64fd-6501, U+6504-6505, U+6508-650a, U+650f, U+6513-6514, U+6516, U+6518-6519, U+651b-651f, U+6522, U+6524, U+6526, U+6529-652c, U+652e, U+6531-6532, U+6534-6538, U+653a, U+653c-653d, U+6543-6544, U+6547-6549, U+654d-654e, U+6550, U+6552, U+6554-6556, U+6558, U+655d-6560, U+6567, U+656b, U+6572, U+6578, U+657a, U+657d, U+6581-6585, U+6588, U+658a, U+658c, U+6592, U+6595, U+6598, U+659b, U+659d, U+659f-65a1, U+65a3-65a6, U+65ab, U+65ae, U+65b2-65b5, U+65b7-65b8, U+65be-65bf, U+65c1-65c4, U+65c6, U+65c8-65c9, U+65cc, U+65ce, U+65d0, U+65d2, U+65d4, U+65d6, U+65d8-65d9, U+65db, U+65df-65e1, U+65e3, U+65f0-65f2, U+65f4-65f5, U+65f9, U+65fb-65fc, U+65fe-6600, U+6603-6604, U+6608-660a, U+660d, U+6611-6612, U+6615-6616, U+661c-661e, U+6621-6624, U+6626, U+6629-662c, U+662e, U+6630-6631, U+6633-6637, U+6639-663b, U+663f-6641, U+6644-6646, U+6648-664a, U+664c, U+664e-664f, U+6651, U+6657-6665, U+6667-6668, U+666a-666d, U+6670, U+6673, U+6675, U+6677-6679, U+667b-667c, U+667e-6680, U+6683-6684, U+6688, U+668b;
    }
    /* [38] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.38.woff2) format('woff2');
      unicode-range: U+62ef, U+62f1-62f2, U+62f4-62f5, U+62fc-62fd, U+62ff, U+6302-6304, U+6308-630d, U+6310, U+6313, U+6316, U+6318, U+631b, U+6327, U+6329-632a, U+632d, U+6332, U+6335-6336, U+6339-633c, U+633e, U+6341-6344, U+6346, U+634a-634e, U+6350, U+6352-6354, U+6358-6359, U+635b, U+6365-6366, U+6369, U+636b-636d, U+6371-6372, U+6374-6378, U+637a, U+637c-637d, U+637f-6380, U+6382, U+6384, U+6387, U+6389-638a, U+638e-6390, U+6394-6396, U+6399-639a, U+639e, U+63a0, U+63a3-63a4, U+63a6, U+63a9, U+63ab-63af, U+63b5, U+63bd-63be, U+63c0-63c1, U+63c4-63c6, U+63c8, U+63ce, U+63d1-63d6, U+63dc, U+63e0, U+63e3, U+63e5, U+63e9-63ed, U+63f2-63f3, U+63f5-63f9, U+6406, U+6409-640a, U+640f-6410, U+6412-6414, U+6416-6418, U+641e, U+6420, U+6422, U+6424-6426, U+6428-642a, U+642f-6430, U+6434-6436, U+643d, U+643f, U+644b, U+644e-644f, U+6451-6454, U+645a-645d, U+645f-6461, U+6463, U+6467, U+646d, U+6473-6474, U+6476, U+6478-6479, U+647b, U+647d, U+6485, U+6487-6488, U+648f-6491, U+6493, U+6495, U+6498-649b, U+649d-649f, U+64a1, U+64a3, U+64a6, U+64a8-64a9, U+64ac, U+64b3, U+64bb-64bf, U+64c2, U+64c4-64c5, U+64c7, U+64c9-64cc, U+64ce, U+64d0-64d2, U+64d4-64d5, U+64d7-64d8, U+64da, U+64e0-64e1;
    }
    /* [39] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.39.woff2) format('woff2');
      unicode-range: U+612b-612c, U+6130-6131, U+6134-6137, U+6139-613a, U+613c-613f, U+6141-6142, U+6144-6147, U+6149-614a, U+614d, U+6153, U+6158-615a, U+615d-6160, U+6164-6165, U+616b-616c, U+616f, U+6171-6175, U+6177-6178, U+617b-6181, U+6183-6184, U+6187, U+618a-618b, U+618d, U+6192-6194, U+6196-619a, U+619c-619d, U+619f-61a0, U+61a5, U+61a8, U+61aa-61ae, U+61b8-61ba, U+61bc, U+61be, U+61c0-61c3, U+61c6, U+61c8, U+61ca-61cf, U+61d5, U+61dc-61df, U+61e1-61e3, U+61e5-61e9, U+61ec-61ed, U+61ef, U+61f4-61f7, U+61fa, U+61fc-6201, U+6203-6204, U+6207-620a, U+620d-620e, U+6213-6215, U+621b-621e, U+6220-6223, U+6227, U+6229-622b, U+622e, U+6230-6233, U+6236, U+6239, U+623d-623e, U+6241-6244, U+6246, U+6248, U+624c, U+624e, U+6250-6252, U+6254, U+6256, U+6258, U+625a-625c, U+625e, U+6260-6261, U+6263-6264, U+6268, U+626d, U+626f, U+6273, U+627a-627e, U+6282-6283, U+6285, U+6289, U+628d-6290, U+6292-6294, U+6296, U+6299, U+629b, U+62a6, U+62a8, U+62ac, U+62b3, U+62b6-62b7, U+62ba-62bb, U+62be-62bf, U+62c2, U+62c4, U+62c6-62c8, U+62ca, U+62ce-62cf, U+62d1, U+62d4-62d6, U+62da, U+62dc, U+62ea, U+62ee;
    }
    /* [40] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.40.woff2) format('woff2');
      unicode-range: U+5f7f, U+5f82-5f83, U+5f87-5f89, U+5f8d, U+5f8f, U+5f91, U+5f96, U+5f99, U+5f9c-5f9d, U+5fa0, U+5fa2, U+5fa4, U+5fa7-5fa8, U+5fab-5fad, U+5faf-5fb1, U+5fb5, U+5fb7-5fb8, U+5fbc-5fbd, U+5fc4, U+5fc7-5fc9, U+5fcb, U+5fd0-5fd4, U+5fdd-5fde, U+5fe1-5fe2, U+5fe4, U+5fe8-5fea, U+5fec-5ff3, U+5ff6, U+5ff8, U+5ffa-5ffd, U+5fff, U+6007, U+600a, U+600d-6010, U+6013-6015, U+6017-601b, U+601f, U+6021-6022, U+6024, U+6026, U+6029, U+602b, U+602d, U+6031, U+6033, U+6035, U+603a, U+6040-6043, U+6046-604a, U+604c-604d, U+6051, U+6054-6057, U+6059-605a, U+605d, U+605f-6064, U+6067, U+606a-606c, U+6070-6071, U+6077, U+607e-607f, U+6081-6086, U+6088-608e, U+6091-6093, U+6095-6098, U+609a-609b, U+609d-609e, U+60a2, U+60a4-60a5, U+60a7-60a8, U+60b0-60b1, U+60b3-60b5, U+60b7-60b8, U+60bb, U+60bd-60be, U+60c2, U+60c4, U+60c6-60cb, U+60ce-60cf, U+60d3-60d5, U+60d8-60d9, U+60db, U+60dd-60df, U+60e1-60e2, U+60e5, U+60ee, U+60f0-60f2, U+60f4-60f8, U+60fa-60fd, U+6100, U+6102-6103, U+6106-6108, U+610a, U+610c-610e, U+6110-6114, U+6116-6117, U+6119, U+611c, U+611e, U+6120-6122, U+6127-6128, U+612a;
    }
    /* [41] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.41.woff2) format('woff2');
      unicode-range: U+5db4, U+5db7-5db9, U+5dbc-5dbd, U+5dc3, U+5dc7, U+5dc9, U+5dcb-5dce, U+5dd0-5dd3, U+5dd6-5dd9, U+5ddb, U+5de0, U+5de2, U+5de4, U+5de9, U+5df2, U+5df5, U+5df8-5df9, U+5dfd, U+5dff-5e00, U+5e07, U+5e0b, U+5e0d, U+5e11-5e12, U+5e14-5e15, U+5e18-5e1b, U+5e1f-5e20, U+5e25, U+5e28, U+5e2e, U+5e32, U+5e35-5e37, U+5e3e, U+5e40, U+5e43-5e44, U+5e47, U+5e49, U+5e4b, U+5e4e, U+5e50-5e51, U+5e54, U+5e56-5e58, U+5e5b-5e5c, U+5e5e-5e5f, U+5e62, U+5e64, U+5e68, U+5e6a-5e6e, U+5e70, U+5e75-5e77, U+5e7a, U+5e7f-5e80, U+5e87, U+5e8b, U+5e8e, U+5e96, U+5e99-5e9a, U+5ea0, U+5ea2, U+5ea4-5ea5, U+5ea8, U+5eaa, U+5eac, U+5eb1, U+5eb3, U+5eb8-5eb9, U+5ebd-5ebf, U+5ec1-5ec2, U+5ec6, U+5ec8, U+5ecb-5ecc, U+5ece-5ed6, U+5ed9-5ee2, U+5ee5, U+5ee8-5ee9, U+5eeb-5eec, U+5ef0-5ef1, U+5ef3-5ef4, U+5ef8-5ef9, U+5efc-5f00, U+5f02-5f03, U+5f06-5f09, U+5f0b-5f0e, U+5f11, U+5f16-5f17, U+5f19, U+5f1b-5f1e, U+5f21-5f24, U+5f27-5f29, U+5f2b-5f30, U+5f34, U+5f36, U+5f38, U+5f3a-5f3d, U+5f3f-5f41, U+5f44-5f45, U+5f47-5f48, U+5f4a, U+5f4c-5f4e, U+5f50-5f51, U+5f54, U+5f56-5f58, U+5f5b-5f5d, U+5f60, U+5f63-5f65, U+5f67, U+5f6a, U+5f6c-5f6d, U+5f6f, U+5f72-5f75, U+5f78, U+5f7a, U+5f7d-5f7e;
    }
    /* [42] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.42.woff2) format('woff2');
      unicode-range: U+5bd7-5bda, U+5bde, U+5be0-5be2, U+5be4-5be6, U+5be8, U+5beb-5bec, U+5bef-5bf1, U+5bf3-5bf6, U+5bfd, U+5c03, U+5c05, U+5c07-5c09, U+5c0c-5c0d, U+5c12-5c14, U+5c17, U+5c19, U+5c1e-5c20, U+5c22-5c24, U+5c26, U+5c28-5c2e, U+5c30, U+5c32, U+5c35-5c36, U+5c38-5c39, U+5c46, U+5c4d-5c50, U+5c53, U+5c59-5c5c, U+5c5f-5c63, U+5c67-5c69, U+5c6c-5c70, U+5c74-5c76, U+5c79-5c7d, U+5c87-5c88, U+5c8a, U+5c8c, U+5c8f, U+5c91-5c92, U+5c94, U+5c9d, U+5c9f-5ca0, U+5ca2-5ca3, U+5ca6-5ca8, U+5caa-5cab, U+5cad, U+5cb1-5cb2, U+5cb4-5cb7, U+5cba-5cbc, U+5cbe, U+5cc5, U+5cc7, U+5cc9, U+5ccb, U+5cd0, U+5cd2, U+5cd7, U+5cd9, U+5cdd, U+5ce6, U+5ce8-5cea, U+5ced-5cee, U+5cf1-5cf2, U+5cf4-5cf5, U+5cfa-5cfb, U+5cfd, U+5d01, U+5d06, U+5d0b, U+5d0d, U+5d10-5d12, U+5d14-5d15, U+5d17-5d1b, U+5d1d, U+5d1f-5d20, U+5d22-5d24, U+5d26-5d27, U+5d2b, U+5d31, U+5d34, U+5d39, U+5d3d, U+5d3f, U+5d42-5d43, U+5d46-5d48, U+5d4a-5d4b, U+5d4e, U+5d51-5d53, U+5d55, U+5d59, U+5d5c, U+5d5f-5d62, U+5d64, U+5d69-5d6a, U+5d6c-5d6d, U+5d6f-5d70, U+5d73, U+5d76, U+5d79-5d7a, U+5d7e-5d7f, U+5d81-5d84, U+5d87-5d88, U+5d8a, U+5d8c, U+5d90, U+5d92-5d95, U+5d97, U+5d99, U+5d9b, U+5d9d, U+5d9f-5da0, U+5da2, U+5da4, U+5da7, U+5dab-5dac, U+5dae, U+5db0, U+5db2;
    }
    /* [43] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.43.woff2) format('woff2');
      unicode-range: U+59ae-59b0, U+59b2-59b3, U+59b7, U+59ba, U+59bc, U+59be, U+59c1, U+59c3-59c4, U+59c6, U+59c8, U+59ca, U+59cd, U+59d2, U+59d9-59da, U+59dd-59df, U+59e3-59e5, U+59e7-59e8, U+59ec, U+59ee-59ef, U+59f1-59f2, U+59f4, U+59f6-59f8, U+5a00, U+5a03-5a04, U+5a09, U+5a0c-5a0e, U+5a11-5a13, U+5a17, U+5a1a-5a1c, U+5a1e-5a1f, U+5a23-5a25, U+5a27-5a28, U+5a2a, U+5a2d, U+5a30, U+5a35-5a36, U+5a40-5a41, U+5a44-5a45, U+5a47-5a49, U+5a4c, U+5a50, U+5a55, U+5a5e, U+5a62-5a63, U+5a65, U+5a67, U+5a6a, U+5a6c-5a6d, U+5a77, U+5a7a-5a7b, U+5a7e, U+5a84, U+5a8b, U+5a90, U+5a93, U+5a96, U+5a99, U+5a9c, U+5a9e-5aa0, U+5aa2, U+5aa7, U+5aac, U+5ab1-5ab3, U+5ab5, U+5ab8, U+5aba-5abf, U+5ac2, U+5ac4, U+5ac6, U+5ac8, U+5acb, U+5acf-5ad0, U+5ad6-5ad7, U+5ada, U+5adc, U+5ae0-5ae1, U+5ae3, U+5ae5-5ae6, U+5ae9-5aea, U+5aee, U+5af0, U+5af5-5af6, U+5afa-5afb, U+5afd, U+5b00-5b01, U+5b08, U+5b0b, U+5b16-5b17, U+5b19, U+5b1b, U+5b1d, U+5b21, U+5b25, U+5b2a, U+5b2c-5b2d, U+5b30, U+5b32, U+5b34, U+5b36, U+5b38, U+5b3e, U+5b40-5b41, U+5b43, U+5b45, U+5b4b-5b4c, U+5b51-5b52, U+5b56, U+5b5a-5b5c, U+5b5e-5b5f, U+5b65, U+5b68-5b69, U+5b6e-5b71, U+5b73, U+5b75-5b76, U+5b7a, U+5b7c-5b84, U+5b86, U+5b8a-5b8b, U+5b8d-5b8e, U+5b90-5b91, U+5b93-5b94, U+5b96, U+5ba5-5ba6, U+5ba8-5ba9, U+5bac-5bad, U+5baf, U+5bb1-5bb2, U+5bb7-5bb8, U+5bba, U+5bbc, U+5bc0-5bc1, U+5bc3, U+5bc7, U+5bc9, U+5bcd-5bd0, U+5bd3-5bd4, U+5bd6;
    }
    /* [44] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.44.woff2) format('woff2');
      unicode-range: U+57d7, U+57dc-57de, U+57e0-57e1, U+57e3-57e4, U+57e6-57e7, U+57e9, U+57ed, U+57f0, U+57f4-57f6, U+57f8, U+57fb, U+57fd-57ff, U+5803-5804, U+5808-580d, U+5819, U+581b, U+581d-5821, U+5826-5827, U+582d, U+582f-5830, U+5832, U+5835, U+5839, U+583d, U+583f-5840, U+5849, U+584b-584d, U+584f-5852, U+5855, U+5858-5859, U+585f, U+5861-5862, U+5864, U+5867-5868, U+586d, U+5870, U+5872, U+5878-5879, U+587c, U+587f-5881, U+5885, U+5887-588d, U+588f-5890, U+5894, U+5896, U+5898, U+589d-589e, U+58a0-58a2, U+58a6, U+58a9-58ab, U+58ae, U+58b1-58b3, U+58b8-58bc, U+58be, U+58c2-58c5, U+58c8, U+58cd-58ce, U+58d0-58da, U+58dc-58e2, U+58e4-58e5, U+58e9, U+58ec, U+58ef, U+58f3-58f4, U+58f7, U+58f9, U+58fb-58fd, U+5902, U+5905-5906, U+590a-590d, U+5910, U+5912-5914, U+5918-5919, U+591b, U+591d, U+591f, U+5921, U+5923-5925, U+5928, U+592c-592d, U+592f-5930, U+5932-5933, U+5935-5936, U+5938-5939, U+593d-593f, U+5943, U+5946, U+594e, U+5950, U+5952-5953, U+5955, U+5957-595b, U+595d-5961, U+5963, U+5967, U+5969, U+596b-596d, U+596f, U+5972, U+5975-5976, U+5978-5979, U+597b-597c, U+5981, U+598b-598e, U+5992, U+5995, U+5997, U+599b, U+599d, U+599f, U+59a3-59a4, U+59a7, U+59ad;
    }
    /* [45] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.45.woff2) format('woff2');
      unicode-range: U+5638-5639, U+563b-563d, U+563f-5641, U+5643-5644, U+5646-5647, U+5649, U+564b, U+564d-5650, U+5653-5654, U+565e, U+5660-5664, U+5666, U+5669-566d, U+566f, U+5671-5672, U+5675-5676, U+5678, U+567a, U+5680, U+5684-5688, U+568a-568c, U+568f, U+5694-5695, U+5699-569a, U+569d-56a0, U+56a5-56a9, U+56ab-56ae, U+56b1-56b4, U+56b6-56b7, U+56bc, U+56be, U+56c0, U+56c2-56c3, U+56c5, U+56c8-56d1, U+56d3, U+56d7-56d9, U+56dc-56dd, U+56df, U+56e1, U+56e4-56e8, U+56eb, U+56ed-56ee, U+56f1, U+56f6-56f7, U+56f9, U+56ff-5704, U+5707-570a, U+570c-570d, U+5711, U+5713, U+5715-5716, U+5718, U+571a-571d, U+5720-5726, U+5729-572a, U+572c, U+572e-572f, U+5733-5734, U+5737-5738, U+573b, U+573d-573f, U+5745-5746, U+574c-574f, U+5751-5752, U+5759, U+575f, U+5761-5762, U+5764-5765, U+5767-5769, U+576b, U+576d-5771, U+5773-5775, U+5777, U+5779-577c, U+577e-577f, U+5781, U+5783, U+5788-5789, U+578c, U+5793-5795, U+5797, U+5799-579a, U+579c-57a1, U+57a4, U+57a7-57aa, U+57ac, U+57ae, U+57b0, U+57b3, U+57b8, U+57bd, U+57c0, U+57c3, U+57c6-57c8, U+57cc, U+57cf, U+57d2-57d6;
    }
    /* [46] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.46.woff2) format('woff2');
      unicode-range: U+546c-546e, U+5470-5471, U+5474-5477, U+547b, U+547f-5481, U+5483-5486, U+5488-548b, U+548d-5492, U+5495-5496, U+549c, U+549f-54a2, U+54a4, U+54a6-54af, U+54b1, U+54b7-54bc, U+54be-54bf, U+54c2-54c4, U+54c6-54c8, U+54ca, U+54cd-54ce, U+54d8, U+54e0, U+54e2, U+54e5-54e6, U+54e8-54ea, U+54ec-54ef, U+54f1, U+54f3, U+54f6, U+54fc-5501, U+5505, U+5508-5509, U+550c-550f, U+5514-5516, U+5527, U+552a-552b, U+552e, U+5532-5533, U+5535-5536, U+5538-5539, U+553b-553d, U+5540-5541, U+5544-5545, U+5547, U+5549-554a, U+554c-554d, U+5550-5551, U+5556-5558, U+555a-555e, U+5560-5561, U+5563-5564, U+5566, U+557b-5583, U+5586-5588, U+558a, U+558e-558f, U+5591-5594, U+5597, U+5599, U+559e-559f, U+55a3-55a4, U+55a8-55a9, U+55ac-55ae, U+55b2, U+55bf, U+55c1, U+55c3-55c4, U+55c6-55c7, U+55c9, U+55cb-55cc, U+55ce, U+55d1-55d4, U+55d7-55d8, U+55da-55db, U+55dd-55df, U+55e2, U+55e4, U+55e9, U+55ec, U+55ee, U+55f1, U+55f6-55f9, U+55fd-55ff, U+5605, U+5607-5608, U+560a, U+560d-5612, U+5616-5617, U+5619, U+561b, U+5620, U+5628, U+562c, U+562f-5637;
    }
    /* [47] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.47.woff2) format('woff2');
      unicode-range: U+52af-52b0, U+52b5-52b8, U+52ba-52be, U+52c0-52c1, U+52c4-52c6, U+52c8, U+52ca, U+52cc-52cd, U+52cf-52d2, U+52d4, U+52d6-52d7, U+52db-52dc, U+52de, U+52e0-52e1, U+52e3, U+52e5-52e6, U+52e8-52ea, U+52ec, U+52f0-52f1, U+52f3-52fb, U+5300-5301, U+5303, U+5306-5308, U+530a-530d, U+530f-5311, U+5313, U+5315, U+5318-531f, U+5321, U+5323-5325, U+5327-532d, U+532f-5333, U+5335, U+5338, U+533c-533e, U+5340, U+5342, U+5345-5346, U+5349, U+534b-534c, U+5359, U+535b, U+535e, U+5361, U+5363-5367, U+5369, U+536c-536e, U+5372, U+5377, U+5379-537b, U+537d-537f, U+5382-5383, U+5387-5389, U+538e, U+5393-5394, U+5396, U+5398-5399, U+539d, U+53a0-53a1, U+53a4-53a6, U+53a9-53ab, U+53ad-53b0, U+53b2, U+53b4-53b8, U+53ba, U+53bd, U+53c0-53c1, U+53c3-53c5, U+53cf, U+53d2-53d3, U+53d5, U+53da-53db, U+53dd-53e0, U+53e2, U+53e6-53e8, U+53ed-53ee, U+53f4-53f5, U+53fa, U+5401-5403, U+540b, U+540f, U+5412-5413, U+541a, U+541d-541e, U+5421, U+5424, U+5427-542a, U+542c-542f, U+5431, U+5433-5436, U+543c-543d, U+543f-5440, U+5443-5444, U+5447, U+544c-544f, U+5455, U+545e, U+5462, U+5464, U+5466-5467, U+5469, U+546b;
    }
    /* [48] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.48.woff2) format('woff2');
      unicode-range: U+50f5-50f6, U+50f9-50fb, U+50fe, U+5101-5103, U+5106-5109, U+510b-510e, U+5110, U+5112, U+5114-511e, U+5121, U+5123, U+5127-5128, U+512c-512d, U+512f, U+5131, U+5133-5135, U+5137-513c, U+513f-5142, U+5147, U+514a, U+514c, U+514f, U+5152-5155, U+5157-5158, U+515f-5160, U+5162, U+5164, U+5166-5167, U+5169-516a, U+516e, U+5173-5174, U+5179, U+517b, U+517e, U+5180, U+5182-5184, U+5189, U+518b-518c, U+518e-5191, U+5193, U+5195-5196, U+5198, U+519d, U+51a1-51a4, U+51a6, U+51a9-51ab, U+51ad, U+51b0-51b3, U+51b5, U+51b8, U+51ba, U+51bc-51bf, U+51c2-51c3, U+51c5, U+51c8-51cb, U+51cf, U+51d1-51d6, U+51d8, U+51de-51e0, U+51e2, U+51e5, U+51e7, U+51e9, U+51ec-51ee, U+51f2-51f5, U+51f7, U+51fe, U+5201-5202, U+5204-5205, U+520b, U+520e, U+5212-5216, U+5218, U+5222, U+5226-5228, U+522a-522b, U+522e, U+5231-5233, U+5235, U+523c, U+5244-5245, U+5249, U+524b-524c, U+524f, U+5254-5255, U+5257-5258, U+525a, U+525c-5261, U+5266, U+5269, U+526c, U+526e, U+5271, U+5273-5274, U+5277-5279, U+527d, U+527f-5280, U+5282-5285, U+5288-528a, U+528c-528d, U+5291-5298, U+529a, U+529c, U+52a4-52a7, U+52ab-52ad;
    }
    /* [49] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.49.woff2) format('woff2');
      unicode-range: U+4f7a-4f7e, U+4f81-4f85, U+4f88-4f8a, U+4f8c, U+4f8e-4f90, U+4f92-4f94, U+4f96-4f9a, U+4f9e-4fa0, U+4fab, U+4fad, U+4faf, U+4fb2, U+4fb7, U+4fb9, U+4fbb-4fbe, U+4fc0-4fc1, U+4fc4-4fc6, U+4fc8-4fc9, U+4fcb-4fd4, U+4fd8, U+4fda-4fdc, U+4fdf-4fe0, U+4fe2, U+4fe4-4fe6, U+4fef-4ff2, U+4ff6, U+4ffc-5002, U+5004-5007, U+500a, U+500c, U+500e-5011, U+5013-5014, U+5016-5018, U+501a-501e, U+5021-5023, U+5025-502a, U+502c-502e, U+5030, U+5032-5033, U+5035, U+5039, U+503b, U+5040-5043, U+5045-5048, U+504a, U+504c, U+504e, U+5050-5053, U+5055-5057, U+5059-505a, U+505f-5060, U+5062-5063, U+5066-5067, U+506a, U+506c-506d, U+5070-5072, U+5077-5078, U+5080-5081, U+5083-5086, U+5088, U+508a, U+508e-5090, U+5092-5096, U+509a-509c, U+509e-50a3, U+50aa, U+50ad, U+50af-50b4, U+50b9-50bb, U+50bd, U+50c0, U+50c2-50c4, U+50c7, U+50c9-50ca, U+50cc, U+50ce, U+50d0-50d1, U+50d3-50d4, U+50d6, U+50d8-50d9, U+50dc-50df, U+50e1-50e6, U+50e8-50e9, U+50ed-50f4;
    }
    /* [50] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.50.woff2) format('woff2');
      unicode-range: U+43ee, U+43f0, U+4408, U+440c, U+4417, U+441c, U+4422, U+4453, U+445b, U+4476, U+447a, U+4491, U+44b3, U+44be, U+44d4, U+4508, U+450d, U+4525, U+4543, U+457a, U+459d, U+45b8, U+45be, U+45e5, U+45ea, U+460f-4610, U+4641, U+4665, U+46a1, U+46ae-46af, U+470c, U+471f, U+4764, U+47e6, U+47fd, U+4816, U+481e, U+4844, U+484e, U+48b5, U+49b0, U+49e7, U+49fa, U+4a04, U+4a29, U+4abc, U+4b38, U+4b3b, U+4b7e, U+4bc2, U+4bca, U+4bd2, U+4be8, U+4c17, U+4c20, U+4c38, U+4cc4, U+4cd1, U+4ce1, U+4d07, U+4d77, U+4e02, U+4e04-4e05, U+4e0c, U+4e0f-4e12, U+4e15, U+4e17, U+4e19, U+4e1e-4e1f, U+4e23-4e24, U+4e28-4e2c, U+4e2e-4e31, U+4e35-4e37, U+4e3f-4e42, U+4e44, U+4e47-4e48, U+4e4d-4e4e, U+4e51, U+4e55-4e56, U+4e58, U+4e5a-4e5c, U+4e62-4e63, U+4e68-4e69, U+4e74-4e75, U+4e79, U+4e7f, U+4e82, U+4e85, U+4e8a, U+4e8d-4e8e, U+4e96-4e99, U+4e9d-4ea0, U+4ea2, U+4ea5-4ea6, U+4ea8, U+4eaf-4eb0, U+4eb3, U+4eb6, U+4eb9, U+4ebb-4ebc, U+4ec2-4ec4, U+4ec6-4ec8, U+4ecd, U+4ed0, U+4ed7, U+4eda-4edb, U+4edd-4ee2, U+4ee8, U+4eeb, U+4eed, U+4eef, U+4ef1, U+4ef3, U+4ef5, U+4ef7, U+4efc-4f00, U+4f02-4f03, U+4f08-4f09, U+4f0b-4f0d, U+4f12, U+4f15-4f17, U+4f19, U+4f1c, U+4f2b, U+4f2e, U+4f30-4f31, U+4f33, U+4f35-4f37, U+4f39, U+4f3b, U+4f3e, U+4f40, U+4f42-4f43, U+4f48-4f49, U+4f4b-4f4c, U+4f52, U+4f54, U+4f56-4f58, U+4f5a-4f5b, U+4f5d-4f5f, U+4f63-4f64, U+4f69-4f6a, U+4f6c, U+4f6e-4f71, U+4f76-4f79;
    }
    /* [53] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.53.woff2) format('woff2');
      unicode-range: U+31de-31e3, U+31f0-321e, U+3220-3230, U+3232-32c9;
    }
    /* [54] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.54.woff2) format('woff2');
      unicode-range: U+303c-303f, U+3094-3096, U+309f-30a0, U+30ee, U+30f7-30fa, U+30ff, U+3105-312d, U+3131-3163, U+3165-318e, U+3190-31ba, U+31c0-31dd;
    }
    /* [55] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.55.woff2) format('woff2');
      unicode-range: U+2f29-2fd5, U+2ff0-2ffb, U+3004, U+3013, U+3016-301b, U+301e, U+3020-303b;
    }
    /* [56] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.56.woff2) format('woff2');
      unicode-range: U+25e5-25e6, U+2601-2603, U+2609, U+260e-260f, U+2616-2617, U+261c-261f, U+262f, U+2641, U+2660, U+2662-2664, U+2666-2668, U+266d-266e, U+2672-267d, U+26bd-26be, U+2702, U+271a, U+273d, U+2740, U+2756, U+2776-277f, U+27a1, U+2934-2935, U+29bf, U+29fa-29fb, U+2b05-2b07, U+2b1a, U+2e3a-2e3b, U+2e80-2e99, U+2e9b-2ef3, U+2f00-2f28;
    }
    /* [57] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.57.woff2) format('woff2');
      unicode-range: U+24d4-24ff, U+2503-2513, U+2515-2516, U+2518-251b, U+251d-2522, U+2524-259f, U+25a2-25ab, U+25b1, U+25b7, U+25c0-25c1, U+25c8-25ca, U+25cc, U+25d0-25d3, U+25e2-25e4;
    }
    /* [58] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.58.woff2) format('woff2');
      unicode-range: U+2116, U+2121, U+2126-2127, U+212b, U+212e, U+2135, U+213b, U+2194-2199, U+21b8-21b9, U+21c4-21c6, U+21cb-21cc, U+21d0, U+21e6-21e9, U+21f5, U+2202-2203, U+2205-2206, U+2208-220b, U+220f, U+2211, U+2213, U+2215, U+221a, U+221d, U+2220, U+2223, U+2225-2226, U+2228, U+222a-222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+224c, U+2252, U+2260, U+2262, U+2264-2265, U+226e-226f, U+2272-2273, U+2276-2277, U+2283-2287, U+228a-228b, U+2295-2299, U+22a0, U+22a5, U+22bf, U+22da-22db, U+22ef, U+2305-2307, U+2318, U+2329-232a, U+23b0-23b1, U+23be-23cc, U+23ce, U+23da-23db, U+2423, U+2469-24d3;
    }
    /* [59] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.59.woff2) format('woff2');
      unicode-range: U+a1-a4, U+a6-a7, U+aa, U+ac-ad, U+b5-b6, U+b8-ba, U+bc-c8, U+ca-d5, U+d9-db, U+dd-df, U+e6, U+ee, U+f0, U+f5, U+f7, U+f9, U+fb, U+fe-102, U+110-113, U+11a-11b, U+128-12b, U+143-144, U+147-148, U+14c, U+14e-14f, U+152-153, U+168-16d, U+192, U+1a0-1a1, U+1af, U+1cd-1dc, U+1f8-1f9, U+251, U+261, U+2c7, U+2c9, U+1e3e-1e3f, U+1ea0-1ebe, U+1ec0-1ec6, U+1ec8-1ef9, U+2011-2012, U+2016, U+2018-201a, U+201e, U+2021, U+2027, U+2030, U+2033, U+2035, U+2042, U+2047, U+2051, U+20a9, U+20ab-20ac, U+20dd-20de, U+2100, U+2105, U+2109-210a, U+210f;
    }
    /* [60] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.60.woff2) format('woff2');
      unicode-range: U+2227, U+26a0, U+2713, U+301f, U+4ff8, U+5239, U+526a, U+54fa, U+5740, U+5937, U+5993, U+59fb, U+5a3c, U+5c41, U+6028, U+626e, U+646f, U+647a, U+64b0, U+64e2, U+65a7, U+66fe, U+6727, U+6955, U+6bef, U+6f23, U+724c, U+767c, U+7a83, U+7ac4, U+7b67, U+8000, U+8207, U+8471, U+8513, U+8599, U+86db, U+8718, U+87f2, U+88f3, U+8e2a, U+8fa3, U+95a5, U+9798, U+9910, U+9957, U+9bab, U+9c3b, U+9daf, U+ff95;
    }
    /* [61] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.61.woff2) format('woff2');
      unicode-range: U+a8, U+2032, U+2261, U+2282, U+3090, U+30f1, U+339c, U+535c, U+53d9, U+56a2, U+56c1, U+5806, U+589f, U+59d0, U+5a7f, U+60e0, U+639f, U+65af, U+68fa, U+69ae, U+6d1b, U+6dcb, U+6ef2, U+71fb, U+725d, U+7262, U+75bc, U+7768, U+7940, U+79bf, U+7bed, U+7d68, U+7dfb, U+814b, U+83e9, U+8494, U+8526, U+8568, U+85ea, U+86d9, U+87ba, U+8861, U+887f, U+8fe6, U+9059, U+9061, U+916a, U+976d, U+97ad, U+9ece;
    }
    /* [62] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.62.woff2) format('woff2');
      unicode-range: U+2d9, U+21d4, U+301d, U+515c, U+52fe, U+5420, U+5750, U+5766, U+5954, U+5b0c, U+5b95, U+5f8a, U+5f98, U+620c, U+621f, U+641c, U+66d9, U+676d, U+6775, U+67f5, U+694a, U+6a02, U+6a3a, U+6a80, U+6c23, U+6c72, U+6faa, U+707c, U+71c8, U+7422, U+74e2, U+7791, U+7825, U+7a14, U+7a1c, U+7c95, U+7fc1, U+82a5, U+82db, U+8304, U+853d, U+8cd3, U+8de8, U+8f0c, U+8f3f, U+9091, U+91c7, U+929a, U+98af, U+9913;
    }
    /* [63] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.63.woff2) format('woff2');
      unicode-range: U+2ca-2cb, U+2229, U+2468, U+2669, U+266f, U+273f, U+4ec0, U+4f60, U+4fb6, U+5347, U+540e, U+543b, U+5d4c, U+5df7, U+5f14, U+5f9e, U+6155, U+62d0, U+6602, U+6666, U+66f3, U+67a2, U+67ca, U+69cc, U+6d29, U+6d9b, U+6e3e, U+6f81, U+7109, U+73c0, U+73c2, U+7425, U+7435-7436, U+7525, U+7554, U+785d, U+786b, U+7ae3, U+7b94, U+7d18, U+81bf, U+8511, U+8549, U+9075, U+9640, U+98e2, U+9e9f, U+ff96;
    }
    /* [64] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.64.woff2) format('woff2');
      unicode-range: U+2467, U+4ece, U+4ed4, U+4f91, U+4fae, U+534d, U+53c9, U+54b3, U+586b, U+5944, U+5b78, U+5f77, U+6101, U+6167-6168, U+61a4, U+62d9, U+698a, U+699b, U+6a59, U+6cc4, U+6e07, U+7099, U+75d2, U+77ad, U+7953, U+7984, U+7a92, U+7baa, U+7dbb, U+817f, U+82ad, U+85e9, U+868a, U+8caa, U+8f44, U+9017, U+907c, U+908a, U+92f3, U+936e, U+9435, U+965b, U+978d, U+9838, U+9a28, U+9b41, U+9ba8, U+9c57, U+9eb9;
    }
    /* [65] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.65.woff2) format('woff2');
      unicode-range: U+b1, U+309b, U+4e5e, U+51f1, U+5506, U+55c5, U+58cc, U+59d1, U+5c51, U+5ef7, U+6284, U+62d7, U+6689, U+673d, U+681e, U+6a2b, U+6a8e, U+6a9c, U+6d63, U+6dd1, U+70b8, U+7235, U+72db, U+72f8, U+7560, U+7c9b, U+7ce7, U+7e1e, U+80af, U+82eb, U+8463, U+8499, U+85dd, U+86ee, U+8a60, U+8a6e, U+8c79, U+8e87, U+8e8a, U+8f5f, U+9010, U+918d, U+9190, U+97fb, U+9ab8, U+9bad, U+9d3b, U+9d5c, U+9dfa, U+9e93;
    }
    /* [66] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.66.woff2) format('woff2');
      unicode-range: U+2020, U+3003, U+3231, U+4e9b, U+4f3d, U+4f47, U+51b6, U+51dc, U+53e1, U+55e3, U+5bc5, U+602f, U+60bc, U+61c9, U+633d, U+637b, U+6492, U+65fa, U+660f, U+66f0, U+6703, U+6876, U+6893, U+6912, U+698e, U+6c7d, U+714c, U+7169, U+71d5, U+725f, U+72d7, U+745b, U+74dc, U+75e2, U+7891, U+7897, U+7dcb, U+810a, U+8218, U+8339, U+840e, U+852d, U+8823, U+8a0a, U+9089, U+919c, U+971c, U+9ad9, U+ff4a, U+ff5a;
    }
    /* [67] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.67.woff2) format('woff2');
      unicode-range: U+2466, U+2600, U+4eab, U+4fe3, U+4ff5, U+51a5, U+51f0, U+536f, U+53d4, U+53f1, U+54a5, U+559d, U+58fa, U+5962, U+59ea, U+5c16, U+5cef, U+5d16, U+5f10, U+5fd6, U+6190-6191, U+6216, U+634f, U+63bb, U+66d6, U+6756, U+6bc5, U+6e26, U+727d, U+731f, U+76f2, U+7729, U+7a7f, U+7aff, U+7c9f, U+818f, U+8236, U+82b9, U+8338, U+85aa, U+88b4, U+8b33, U+904d, U+93a7, U+96cc, U+96eb, U+9aed, U+9b8e, U+fa11;
    }
    /* [68] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.68.woff2) format('woff2');
      unicode-range: U+251c, U+2523, U+4e14, U+545f, U+54bd, U+553e, U+55dc, U+56da, U+589c, U+59dc, U+5b55, U+5bb5, U+5ce1, U+5df4, U+5eb6, U+5ec9, U+62f7, U+6357, U+64a5, U+6591, U+65bc, U+6897, U+6e1a, U+7063, U+711a, U+721b, U+722c, U+75b9, U+75d5, U+75fa, U+7766, U+7aae, U+7b48, U+7b8b, U+7d21, U+7e55, U+7f75, U+842c, U+8910, U+8a63, U+8b39, U+8b5a, U+8cdc, U+8d74, U+907d, U+91e7, U+9306, U+96bc, U+98f4, U+9ac4;
    }
    /* [69] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.69.woff2) format('woff2');
      unicode-range: U+2003, U+2312, U+266c, U+4f86, U+51ea, U+5243, U+5256, U+541f, U+5841, U+5df3, U+601c, U+60e7, U+632b, U+638c, U+64ad, U+6881, U+697c, U+69cd, U+6c50, U+6d2a, U+6fc1, U+7027, U+7058, U+70f9, U+714e, U+7345, U+751a, U+760d, U+764c, U+77db, U+79e6, U+7d79, U+7e8f, U+80ce, U+814e, U+81fc, U+8247, U+8278, U+85a9, U+8a03, U+90ed, U+9784, U+9801, U+984e, U+99b3, U+9bc9, U+9bdb, U+9be8, U+9e78, U+ff6b;
    }
    /* [70] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.70.woff2) format('woff2');
      unicode-range: U+266b, U+3006, U+4f10, U+5176, U+5197, U+51a8, U+51c6, U+52f2, U+5614, U+5875, U+5a2f, U+5b54, U+5ce0, U+5dba, U+5deb, U+5e63, U+5f59, U+5fcc, U+6068, U+6367, U+68b6, U+6a0b, U+6b64, U+6e15, U+6eba, U+7272, U+72a0, U+7947, U+7985, U+79e9, U+7a3d, U+7a9f, U+7aaf, U+7b95, U+7f60, U+7f9e, U+7fe0, U+8098, U+80ba, U+8106, U+82d4, U+831c, U+87f9, U+8a1f, U+8acf, U+90c1, U+920d, U+9756, U+fe43, U+ff94;
    }
    /* [71] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.71.woff2) format('woff2');
      unicode-range: U+af, U+2465, U+2517, U+33a1, U+50c5, U+50e7, U+51b4, U+5384, U+5606, U+5bb0, U+5cac, U+5ee3, U+618e, U+61f2, U+62c9, U+66ab, U+66f9, U+6816, U+6960, U+6b3e, U+6f20, U+7078, U+72d0, U+73ed, U+7ad9, U+7b1b, U+7be4, U+7d62, U+7f51, U+80b4, U+80f4, U+8154, U+85fb, U+865c, U+8702, U+895f, U+8aed, U+8b90, U+8ced, U+8fbf, U+91d8, U+9418, U+9583, U+9591, U+9813, U+982c, U+9bd6, U+ff46, U+ff7f, U+ff88;
    }
    /* [72] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.72.woff2) format('woff2');
      unicode-range: U+4e91, U+508d, U+514e, U+51f6, U+5446, U+5504, U+584a, U+59a8, U+59d3, U+5a46, U+5ac9, U+6020, U+60a6, U+6148, U+621a, U+6234, U+64c1, U+6523, U+675c, U+67d1, U+6953, U+6ccc, U+6df5, U+6e13, U+6f06, U+723a, U+7325, U+732a, U+74e6, U+758e, U+75ab, U+75d9, U+7a40, U+8096, U+82fa, U+8587, U+8594, U+8a6b, U+8ab9, U+8b17, U+8b83, U+937c, U+963b, U+9673, U+96db, U+9ce9, U+9f4b, U+ff67, U+ff82, U+ff93;
    }
    /* [73] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.73.woff2) format('woff2');
      unicode-range: U+221e, U+2514, U+51f9, U+5270, U+5449, U+5824, U+59a5, U+59ac, U+5a29, U+5d07, U+5e16, U+60e3, U+614c, U+6276, U+643e, U+64ab, U+6562, U+6681, U+670b, U+6734, U+67af, U+6a3d, U+6b05, U+6dc0, U+6e4a, U+7259, U+7409, U+78a7, U+7a6b, U+8015, U+809b, U+817a, U+830e, U+837b, U+85ab, U+8a23, U+8a93, U+8b00, U+8b19, U+8b21, U+8cbf, U+8fb0, U+901d, U+91b8, U+9320, U+932c, U+9688, U+96f6, U+9df2, U+ff6a;
    }
    /* [74] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.74.woff2) format('woff2');
      unicode-range: U+2002, U+2025, U+4f8d, U+51e1, U+51f8, U+5507, U+5598, U+58f1, U+5983, U+5c3c, U+5de7, U+5e7d, U+5eca, U+5f61, U+606d, U+60f9, U+636e, U+64ec, U+67da, U+67ff, U+6813, U+68f2, U+693f, U+6b6a, U+6bbb, U+6ef4, U+7092, U+717d, U+7261, U+73c8, U+7432, U+7483, U+76fe, U+7709, U+78d0, U+8036, U+81a3, U+81b3, U+82af, U+8305, U+8309, U+8870, U+88fe, U+8cd1, U+8d66, U+906e, U+971e, U+9812, U+ff79, U+ff90;
    }
    /* [75] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.75.woff2) format('woff2');
      unicode-range: U+2464, U+2501, U+2640, U+2642, U+339d, U+4f0e, U+5091, U+50b5, U+5132, U+51cc, U+558b, U+55aa, U+585e, U+5bee, U+5dfe, U+60b6, U+62b9, U+6349, U+6566, U+6590, U+6842, U+689d, U+6a58, U+6bb4, U+6c70, U+6ff1, U+7815, U+7881, U+7aaa, U+7bc7, U+7def, U+7fa8, U+8017, U+8061, U+821f, U+8429, U+8ce0, U+8e74, U+9019, U+90ca, U+9162, U+932f, U+93ae, U+9644, U+990c, U+9cf3, U+ff56, U+ff6e, U+ff7e, U+ff85;
    }
    /* [76] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.76.woff2) format('woff2');
      unicode-range: U+2266-2267, U+4f2f, U+5208, U+5451, U+546a, U+5589, U+576a, U+5815, U+5a9a, U+5b9b, U+5c3a, U+5efb, U+5faa, U+6109, U+6643, U+6652, U+695a, U+69fd, U+6b86, U+6daf, U+6f84, U+7089, U+70cf, U+7a00, U+7a4f, U+7b39, U+7d33, U+80e1, U+828b, U+82a6, U+86cd, U+8c8c, U+8cca, U+8df3, U+9077, U+9175, U+91dc, U+925b, U+9262, U+9271, U+92ed, U+9855, U+9905, U+9d28, U+ff3f, U+ff58, U+ff68, U+ff6d, U+ff9c;
    }
    /* [77] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.77.woff2) format('woff2');
      unicode-range: U+2207, U+25ef, U+309c, U+4e4f, U+5146, U+51dd, U+5351, U+540a, U+5629, U+5eb5, U+5f04, U+5f13, U+60dc, U+6212, U+63b4, U+642c, U+6627, U+66a6, U+66c7, U+66fd, U+674e, U+6b96, U+6c4e, U+6df3, U+6e67, U+72fc, U+733f, U+7c97, U+7cde, U+7db1, U+7e4d, U+816b, U+82d1, U+84cb, U+854e, U+8607, U+86c7, U+871c, U+8776, U+8a89, U+8fc4, U+91a4, U+9285, U+9685, U+9903, U+9b31, U+9f13, U+ff42, U+ff74, U+ff91;
    }
    /* [78] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.78.woff2) format('woff2');
      unicode-range: U+4e32, U+51db, U+53a8, U+53ea, U+5609, U+5674, U+5a92, U+5e7e, U+6115, U+611a, U+62cc, U+62ed, U+63c9, U+64b9, U+64e6, U+65cb, U+6606, U+6731, U+683d, U+6afb, U+7460, U+771e, U+78ef, U+7b26, U+7b51, U+7d10, U+7d2f, U+7d46, U+7db4, U+80de, U+819c, U+84b2, U+85cd, U+865a, U+8ecc, U+9022, U+90b8, U+9192, U+9675, U+96b7, U+99ff, U+ff44, U+ff55, U+ff6c, U+ff73, U+ff75, U+ff86, U+ff8d, U+ff92, U+ffe3;
    }
    /* [79] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.79.woff2) format('woff2');
      unicode-range: U+25b3, U+30f5, U+4eae, U+4f46, U+4f51, U+5203, U+52ff, U+55a7, U+564c, U+565b, U+57f9, U+5805, U+5b64, U+5e06, U+5f70, U+5f90, U+60e8, U+6182, U+62f3, U+62fe, U+63aa, U+64a4, U+65d7, U+673a, U+6851, U+68cb, U+68df, U+6d1e, U+6e58, U+6e9d, U+77b3, U+7832, U+7c3f, U+7f70, U+80aa, U+80c6, U+8105, U+819d, U+8276, U+8679, U+8986, U+8c9d, U+8fc5, U+916c, U+9665, U+9699, U+96c0, U+9a19, U+ff59, U+ff8b;
    }
    /* [80] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.80.woff2) format('woff2');
      unicode-range: U+2463, U+25a1, U+4ef0, U+5076, U+5098, U+51fd, U+5302, U+5448, U+54c9, U+570b, U+583a, U+5893, U+58a8, U+58ee, U+5949, U+5bdb, U+5f26, U+5f81, U+6052, U+6170, U+61c7, U+631f, U+635c, U+664b, U+69fb, U+6f01, U+7070, U+722a, U+745e, U+755c, U+76c6, U+78c1, U+79e4, U+7bb8, U+7d0b, U+81a8, U+81e3, U+82d7, U+8b5c, U+8f14, U+8fb1, U+8fbb, U+9283, U+9298, U+9a30, U+ff03, U+ff50, U+ff7b, U+ff8e-ff8f;
    }
    /* [81] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.81.woff2) format('woff2');
      unicode-range: U+2010, U+2502, U+25b6, U+4f3a, U+514b, U+5265, U+52c3, U+5339, U+53ec, U+54c0, U+55b0, U+5854, U+5b8f, U+5cb3, U+5e84, U+60da, U+6247, U+6249, U+628a, U+62cd, U+65ac, U+67f4, U+6838, U+690e, U+6cf0, U+6f02, U+6f2c, U+6f70, U+708a, U+7434, U+75be, U+77ef, U+7c60, U+7c98, U+7d1b, U+7e2b, U+80a5, U+820c, U+8210, U+8475, U+862d, U+8650, U+8997, U+906d, U+91c8, U+9700, U+9727, U+9df9, U+ff3a, U+ff9a;
    }
    /* [82] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.82.woff2) format('woff2');
      unicode-range: U+2103, U+5049, U+52b1, U+5320, U+5553, U+572d, U+58c7, U+5b5d, U+5bc2, U+5de3, U+5e61, U+5f80, U+61a9, U+67d0, U+6c88, U+6ca1, U+6ce5, U+6d78, U+6e9c, U+6f54, U+731b, U+73b2, U+74a7, U+74f6, U+75e9, U+7b20, U+7c8b, U+7c92, U+7f72, U+809d, U+8108, U+82b3, U+82bd, U+84b8, U+84c4, U+88c2, U+8ae6, U+8ef8, U+902e, U+9065, U+9326, U+935b, U+938c, U+9676, U+9694, U+96f7, U+9ed9, U+ff48, U+ff4c, U+ff81;
    }
    /* [83] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.83.woff2) format('woff2');
      unicode-range: U+2500, U+3008-3009, U+4ead, U+4f0f, U+4fca, U+53eb, U+543e, U+57a2, U+5cf0, U+5e8f, U+5fe0, U+61b2, U+62d8, U+6442, U+64b2, U+6589, U+659c, U+67f1, U+68c4, U+6905, U+6cb8, U+6d12, U+6de1, U+6fe1, U+70c8, U+723d, U+73e0, U+7656, U+773a, U+7948, U+7b87, U+7d3a, U+7e1b, U+7e4a, U+819a, U+8358, U+83c5, U+84bc, U+864e, U+8912, U+8c9e, U+8d05, U+92fc, U+9396, U+98fd, U+99d2, U+ff64, U+ff7a, U+ff83;
    }
    /* [84] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.84.woff2) format('woff2');
      unicode-range: U+3014-3015, U+4e3c, U+5036, U+5075, U+533f, U+53e9, U+5531, U+5642, U+5984, U+59e6, U+5a01, U+5b6b, U+5c0b, U+5f25, U+6069, U+60a0, U+614e, U+62b5, U+62d2-62d3, U+6597, U+660c, U+674f, U+67cf, U+6841, U+6cf3, U+6d32, U+6d69, U+6f64, U+716e, U+7761, U+7b52, U+7be0, U+7dbf, U+7de9, U+7f36, U+81d3, U+8302, U+8389, U+846c, U+84ee, U+8a69, U+9038, U+9d8f, U+ff47, U+ff4b, U+ff76, U+ff97, U+ff9b;
    }
    /* [85] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.85.woff2) format('woff2');
      unicode-range: U+25c7, U+3007, U+504f, U+507d, U+51a0, U+52a3, U+5410, U+5510, U+559a, U+5782, U+582a, U+5c0a, U+5c3f, U+5c48, U+5f6b, U+6176, U+622f, U+6279, U+62bd, U+62dd, U+65ed, U+67b6, U+6817, U+6850, U+6d6a, U+6deb, U+6ea2, U+6edd, U+6f5c, U+72e9, U+73a9, U+7573, U+76bf, U+7950, U+7956, U+7f8a, U+7ffc, U+80a2, U+80c3, U+83ca, U+8a02, U+8a13, U+8df5, U+9375, U+983b, U+9867, U+99b4, U+ff4e, U+ff71, U+ff89;
    }
    /* [86] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.86.woff2) format('woff2');
      unicode-range: U+24, U+2022, U+2212, U+221f, U+2665, U+4ecf, U+5100, U+51cd, U+52d8, U+5378, U+53f6, U+5618, U+574a, U+5982, U+5996, U+5c1a, U+5e1d, U+5f84, U+609f, U+61a7, U+61f8, U+6398, U+63ee, U+6676, U+6691, U+6eb6, U+7126, U+71e5, U+7687, U+7965, U+7d17, U+80a1, U+8107, U+8266, U+85a6, U+8987, U+8ca2, U+8cab, U+8e0a, U+9042, U+95c7, U+9810, U+98fc, U+ff52-ff54, U+ff61, U+ff77, U+ff98-ff99;
    }
    /* [87] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.87.woff2) format('woff2');
      unicode-range: U+b0, U+226a, U+2462, U+4e39, U+4fc3, U+4fd7, U+50be, U+50da, U+5200, U+5211, U+54f2, U+596a, U+5b22, U+5bb4, U+5d50, U+60a3, U+63fa, U+658e, U+65e8, U+6669, U+6795, U+679d, U+67a0, U+6b3a, U+6e09, U+757f, U+7cd6, U+7dbe, U+7ffb, U+83cc, U+83f1, U+840c, U+845b, U+8846, U+8972, U+8a34, U+8a50, U+8a87, U+8edf, U+8ff0, U+90a6, U+9154, U+95a3, U+9663, U+9686, U+96c7, U+ff1b, U+ff3c, U+ff7c, U+ff8a;
    }
    /* [88] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.88.woff2) format('woff2');
      unicode-range: U+25bd, U+4e59, U+4ec1, U+4ff3, U+515a, U+518a, U+525b, U+5375, U+552f, U+57a3, U+5b9c, U+5c3d, U+5e3d, U+5e7b, U+5f0a, U+6094, U+6458, U+654f, U+67f3, U+6b8a, U+6bd2, U+6c37, U+6ce1, U+6e56, U+6e7f, U+6ed1, U+6ede, U+6f0f, U+70ad, U+7267, U+7363, U+786c, U+7a42, U+7db2, U+7f85, U+8178, U+829d, U+8896, U+8c5a, U+8cb0, U+8ce2, U+8ed2, U+9047, U+9177, U+970a, U+9ea6, U+ff31, U+ff39, U+ff49, U+ff80;
    }
    /* [89] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.89.woff2) format('woff2');
      unicode-range: U+a5, U+4e80, U+4ee4, U+4f34, U+4f73, U+4f75, U+511f, U+5192, U+52aa, U+53c8, U+570f, U+57cb, U+596e, U+5d8b, U+5f66, U+5fd9, U+62db, U+62f6, U+6328, U+633f, U+63a7, U+6469, U+6bbf, U+6c41, U+6c57, U+6d44, U+6dbc, U+706f, U+72c2, U+72ed, U+7551, U+75f4, U+7949, U+7e26, U+7fd4, U+8150, U+8af8, U+8b0e, U+8b72, U+8ca7, U+934b, U+9a0e, U+9a12, U+9b42, U+ff41, U+ff43, U+ff45, U+ff4f, U+ff62-ff63;
    }
    /* [90] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.90.woff2) format('woff2');
      unicode-range: U+4e18, U+4fb5, U+5104, U+52c7, U+5353, U+5374, U+53e5, U+587e, U+594f, U+5a20, U+5de1, U+5f18, U+5fcd, U+6291, U+62ab, U+6355, U+6392, U+63da, U+63e1, U+656c, U+6687, U+68b0-68b1, U+68d2, U+68da, U+6b27, U+6cbc, U+7159, U+7344, U+73cd, U+76df, U+790e, U+7cf8, U+8102, U+88c1, U+8aa0, U+8e0f, U+9178, U+92ad, U+9670, U+96c5, U+9cf4, U+9db4, U+ff3e, U+ff6f, U+ff72, U+ff78, U+ff7d, U+ff84, U+ff8c;
    }
    /* [91] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.91.woff2) format('woff2');
      unicode-range: U+60, U+2200, U+226b, U+2461, U+517c, U+526f, U+5800, U+5b97, U+5bf8, U+5c01, U+5d29, U+5e4c, U+5e81, U+6065, U+61d0, U+667a, U+6696, U+6843, U+6c99, U+6d99, U+6ec5, U+6f22, U+6f6e, U+6fa4, U+6fef, U+71c3, U+72d9, U+7384, U+78e8, U+7a1a, U+7a32, U+7a3c, U+7adc, U+7ca7, U+7d2b, U+7dad, U+7e4b, U+80a9, U+8170, U+81ed, U+820e, U+8a17, U+8afe, U+90aa, U+914e, U+963f, U+99c4, U+9eba, U+9f3b, U+ff38;
    }
    /* [92] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.92.woff2) format('woff2');
      unicode-range: U+2460, U+4e5f, U+4e7e, U+4ed9, U+501f, U+502b, U+5968, U+5974, U+5ac1, U+5b99, U+5ba3, U+5be7, U+5be9, U+5c64, U+5cb8, U+5ec3, U+5f1f, U+616e, U+6297, U+62e0, U+62ec, U+6368, U+642d, U+65e6, U+6717, U+676f, U+6b04, U+732e, U+7652, U+76ca, U+76d7, U+7802, U+7e70, U+7f6a, U+8133, U+81e8, U+866b, U+878d, U+88f8, U+8a5e, U+8cdb, U+8d08, U+907a, U+90e1, U+96f2, U+9f8d, U+ff35, U+ff37, U+ff40, U+ff9d;
    }
    /* [93] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.93.woff2) format('woff2');
      unicode-range: U+21d2, U+25ce, U+300a-300b, U+4e89, U+4e9c, U+4ea1, U+5263, U+53cc, U+5426, U+5869, U+5947, U+598a, U+5999, U+5e55, U+5e72, U+5e79, U+5fae, U+5fb9, U+602a, U+6163, U+624d, U+6749, U+6c5a, U+6cbf, U+6d45, U+6dfb, U+6e7e, U+708e, U+725b, U+7763, U+79c0, U+7bc4, U+7c89, U+7e01, U+7e2e, U+8010, U+8033, U+8c6a, U+8cc3, U+8f1d, U+8f9b, U+8fb2, U+907f, U+90f7, U+9707, U+9818, U+9b3c, U+ff0a, U+ff4d;
    }
    /* [94] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.94.woff2) format('woff2');
      unicode-range: U+2015, U+2190, U+4e43, U+5019, U+5247, U+52e7, U+5438, U+54b2, U+55ab, U+57f7, U+5bd2, U+5e8a, U+5ef6, U+6016, U+60b2, U+6162, U+6319, U+6551, U+6607, U+66b4, U+675f, U+67d4, U+6b20, U+6b53, U+6ce3, U+719f, U+75b2, U+770b, U+7720, U+77ac, U+79d2, U+7af9, U+7d05, U+7dca, U+8056, U+80f8, U+81f3, U+8352, U+885d, U+8a70, U+8aa4, U+8cbc, U+900f, U+9084, U+91e3, U+9451, U+96c4, U+99c6, U+9ad4, U+ff70;
    }
    /* [95] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.95.woff2) format('woff2');
      unicode-range: U+2193, U+25b2, U+4e4b, U+516d, U+51c4, U+529f, U+52c9, U+5360, U+5442, U+5857, U+5915, U+59eb, U+5a9b, U+5c3b, U+6012, U+61b6, U+62b1, U+6311, U+6577, U+65e2, U+65ec, U+6613, U+6790, U+6cb9, U+7372, U+76ae, U+7d5e, U+7fcc, U+88ab, U+88d5, U+8caf, U+8ddd, U+8ecd, U+8f38, U+8f9e, U+8feb, U+9063, U+90f5, U+93e1, U+968a, U+968f, U+98fe, U+9ec4, U+ff1d, U+ff27, U+ff2a, U+ff36, U+ff3b, U+ff3d, U+ffe5;
    }
    /* [96] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.96.woff2) format('woff2');
      unicode-range: U+4e03, U+4f38, U+50b7, U+5264, U+5348, U+5371, U+585a, U+58ca, U+5951, U+59b9, U+59d4, U+5b98, U+5f8b, U+6388, U+64cd, U+65e7, U+6803, U+6b6f, U+6d66, U+6e0b, U+6ecb, U+6fc3, U+72ac, U+773c, U+77e2, U+7968, U+7a74, U+7dba, U+7dd1, U+7e3e, U+808c, U+811a, U+8179, U+8239, U+8584, U+8a0e, U+8a72, U+8b66, U+8c46, U+8f29, U+90a3, U+9234, U+96f0, U+9769, U+9774, U+9aa8, U+ff26, U+ff28, U+ff9e-ff9f;
    }
    /* [97] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.97.woff2) format('woff2');
      unicode-range: U+7e, U+b4, U+25c6, U+2661, U+4e92, U+4eee, U+4ffa, U+5144, U+5237, U+5287, U+52b4, U+58c1, U+5bff, U+5c04, U+5c06, U+5e95, U+5f31, U+5f93, U+63c3, U+640d, U+6557, U+6614, U+662f, U+67d3, U+690d, U+6bba, U+6e6f, U+72af, U+732b, U+7518, U+7ae0, U+7ae5, U+7af6, U+822a, U+89e6, U+8a3a, U+8a98, U+8cb8, U+8de1, U+8e8d, U+95d8, U+961c, U+96a3, U+96ea, U+9bae, U+ff20, U+ff22, U+ff29, U+ff2b-ff2c;
    }
    /* [98] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.98.woff2) format('woff2');
      unicode-range: U+25cb, U+4e71, U+4f59, U+50d5, U+520a, U+5217, U+5230, U+523a-523b, U+541b, U+5439, U+5747, U+59c9, U+5bdf, U+5c31, U+5de8, U+5e7c, U+5f69, U+6050, U+60d1, U+63cf, U+663c, U+67c4, U+6885, U+6c38, U+6d6e, U+6db2, U+6df7, U+6e2c, U+6f5f, U+7532, U+76e3-76e4, U+7701, U+793c, U+79f0, U+7a93, U+7d00, U+7de0, U+7e54, U+8328, U+8840, U+969c, U+96e8, U+9811, U+9aea, U+9b5a, U+ff24, U+ff2e, U+ff57;
    }
    /* [99] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.99.woff2) format('woff2');
      unicode-range: U+2191, U+505c, U+52e4, U+5305, U+535a, U+56e0, U+59bb, U+5acc, U+5b09, U+5b87, U+5c90, U+5df1, U+5e2d, U+5e33, U+5f3e, U+6298, U+6383, U+653b, U+6697, U+6804, U+6a39, U+6cca, U+6e90, U+6f2b, U+702c, U+7206, U+7236, U+7559, U+7565, U+7591, U+75c7, U+75db, U+7b4b, U+7bb1, U+7d99, U+7fbd, U+8131, U+885b, U+8b1d, U+8ff7, U+9003, U+9045, U+96a0, U+9732, U+990a, U+99d0, U+9e97, U+9f62, U+ff25, U+ff2d;
    }
    /* [100] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.100.woff2) format('woff2');
      unicode-range: U+4e08, U+4f9d, U+5012, U+514d, U+51b7, U+5275, U+53ca, U+53f8, U+5584, U+57fc, U+5b9d, U+5bfa, U+5c3e, U+5f01, U+5fb4, U+5fd7, U+606f, U+62e1, U+6563, U+6674, U+6cb3, U+6d3e, U+6d74, U+6e1b, U+6e2f, U+718a, U+7247, U+79d8, U+7d14, U+7d66, U+7d71, U+7df4, U+7e41, U+80cc, U+8155, U+83d3, U+8a95, U+8ab2, U+8ad6, U+8ca1, U+9000, U+9006, U+9678, U+97d3, U+9808, U+98ef, U+9a5a, U+9b45, U+ff23, U+ff30;
    }
    /* [101] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.101.woff2) format('woff2');
      unicode-range: U+25bc, U+3012, U+4ef2, U+4f0a, U+516b, U+5373, U+539a, U+53b3, U+559c, U+56f0, U+5727, U+5742, U+5965, U+59ff, U+5bc6, U+5dfb, U+5e45, U+5ead, U+5fb3, U+6211, U+6253, U+639b, U+63a8, U+6545, U+6575, U+6628, U+672d, U+68a8, U+6bdb, U+6d25, U+707d, U+767e, U+7834, U+7b46, U+7bc9, U+8074, U+82e6, U+8349, U+8a2a, U+8d70, U+8da3, U+8fce, U+91cc, U+967d, U+97ff, U+9996, U+ff1c, U+ff2f, U+ff32, U+ff34;
    }
    /* [102] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.102.woff2) format('woff2');
      unicode-range: U+3d, U+5e, U+25cf, U+4e0e, U+4e5d, U+4e73, U+4e94, U+4f3c, U+5009, U+5145, U+51ac, U+5238, U+524a, U+53f3, U+547c, U+5802, U+5922, U+5a66, U+5c0e, U+5de6, U+5fd8, U+5feb, U+6797, U+685c, U+6b7b, U+6c5f-6c60, U+6cc9, U+6ce2, U+6d17, U+6e21, U+7167, U+7642, U+76db, U+8001, U+821e, U+8857, U+89d2, U+8b1b, U+8b70, U+8cb4, U+8cde, U+8f03, U+8f2a, U+968e, U+9b54, U+9e7f, U+9ebb, U+ff05, U+ff33;
    }
    /* [103] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.103.woff2) format('woff2');
      unicode-range: U+500d, U+5074, U+50cd, U+5175, U+52e2, U+5352, U+5354, U+53f2, U+5409, U+56fa, U+5a18, U+5b88, U+5bdd, U+5ca9, U+5f92, U+5fa9, U+60a9, U+623f, U+6483, U+653f, U+666f, U+66ae, U+66f2, U+6a21, U+6b66, U+6bcd, U+6d5c, U+796d, U+7a4d, U+7aef, U+7b56, U+7b97, U+7c4d, U+7e04, U+7fa9, U+8377, U+83dc, U+83ef, U+8535, U+8863, U+88cf, U+88dc, U+8907, U+8acb, U+90ce, U+91dd, U+ff0b, U+ff0d, U+ff19, U+ff65;
    }
    /* [104] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.104.woff2) format('woff2');
      unicode-range: U+4e01, U+4e21, U+4e38, U+52a9, U+547d, U+592e, U+5931, U+5b63, U+5c40, U+5dde, U+5e78, U+5efa, U+5fa1, U+604b, U+6075, U+62c5, U+632f, U+6a19, U+6c0f, U+6c11, U+6c96, U+6e05, U+70ba, U+71b1, U+7387, U+7403, U+75c5, U+77ed, U+795d, U+7b54, U+7cbe, U+7d19, U+7fa4, U+8089, U+81f4, U+8208, U+8336, U+8457, U+8a33, U+8c4a, U+8ca0, U+8ca8, U+8cc0, U+9014, U+964d, U+9803, U+983c, U+98db, U+ff17, U+ff21;
    }
    /* [105] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.105.woff2) format('woff2');
      unicode-range: U+25, U+25a0, U+4e26, U+4f4e, U+5341, U+56f2, U+5bbf, U+5c45, U+5c55, U+5c5e, U+5dee, U+5e9c, U+5f7c, U+6255, U+627f, U+62bc, U+65cf, U+661f, U+666e, U+66dc, U+67fb, U+6975, U+6a4b, U+6b32, U+6df1, U+6e29, U+6fc0, U+738b, U+7686, U+7a76, U+7a81, U+7c73, U+7d75, U+7dd2, U+82e5, U+82f1, U+85ac, U+888b, U+899a, U+8a31, U+8a8c, U+8ab0, U+8b58, U+904a, U+9060, U+9280, U+95b2, U+984d, U+9ce5, U+ff18;
    }
    /* [106] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.106.woff2) format('woff2');
      unicode-range: U+30f6, U+50ac, U+5178, U+51e6, U+5224, U+52dd, U+5883, U+5897, U+590f, U+5a5a, U+5bb3, U+5c65, U+5e03, U+5e2b, U+5e30, U+5eb7, U+6271, U+63f4, U+64ae, U+6574, U+672b, U+679a, U+6a29-6a2a, U+6ca2, U+6cc1, U+6d0b, U+713c, U+74b0, U+7981, U+7a0b, U+7bc0, U+7d1a, U+7d61, U+7fd2, U+822c, U+8996, U+89aa, U+8cac, U+8cbb, U+8d77, U+8def, U+9020, U+9152, U+9244, U+9662, U+967a, U+96e3, U+9759, U+ff16;
    }
    /* [107] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.107.woff2) format('woff2');
      unicode-range: U+23, U+3c, U+2192, U+4e45, U+4efb, U+4f50, U+4f8b, U+4fc2, U+5024, U+5150, U+5272, U+5370, U+53bb, U+542b, U+56db, U+56e3, U+57ce, U+5bc4, U+5bcc, U+5f71, U+60aa, U+6238, U+6280, U+629c, U+6539, U+66ff, U+670d, U+677e-677f, U+6839, U+69cb, U+6b4c, U+6bb5, U+6e96, U+6f14, U+72ec, U+7389, U+7814, U+79cb, U+79d1, U+79fb, U+7a0e, U+7d0d, U+85e4, U+8d64, U+9632, U+96e2, U+9805, U+99ac, U+ff1e;
    }
    /* [108] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.108.woff2) format('woff2');
      unicode-range: U+2605-2606, U+301c, U+4e57, U+4fee, U+5065, U+52df, U+533b, U+5357, U+57df, U+58eb, U+58f0, U+591c, U+592a-592b, U+5948, U+5b85, U+5d0e, U+5ea7, U+5ff5, U+6025, U+63a1, U+63a5, U+63db, U+643a, U+65bd, U+671d, U+68ee, U+6982, U+6b73, U+6bd4, U+6d88, U+7570, U+7b11, U+7d76, U+8077, U+8217, U+8c37, U+8c61, U+8cc7, U+8d85, U+901f, U+962a, U+9802, U+9806, U+9854, U+98f2, U+9928, U+99c5, U+9ed2;
    }
    /* [109] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.109.woff2) format('woff2');
      unicode-range: U+266a, U+4f11, U+533a, U+5343, U+534a, U+53cd, U+5404, U+56f3, U+5b57-5b58, U+5bae, U+5c4a, U+5e0c, U+5e2f, U+5eab, U+5f35, U+5f79, U+614b, U+6226, U+629e, U+65c5, U+6625, U+6751, U+6821, U+6b69, U+6b8b, U+6bce, U+6c42, U+706b, U+7c21, U+7cfb, U+805e, U+80b2, U+82b8, U+843d, U+8853, U+88c5, U+8a3c, U+8a66, U+8d8a, U+8fba, U+9069, U+91cf, U+9752, U+975e, U+9999, U+ff0f-ff10, U+ff14-ff15;
    }
    /* [110] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.110.woff2) format('woff2');
      unicode-range: U+40, U+4e86, U+4e95, U+4f01, U+4f1d, U+4fbf, U+5099, U+5171, U+5177, U+53cb, U+53ce, U+53f0, U+5668, U+5712, U+5ba4, U+5ca1, U+5f85, U+60f3, U+653e, U+65ad, U+65e9, U+6620, U+6750, U+6761, U+6b62, U+6b74, U+6e08, U+6e80, U+7248, U+7531, U+7533, U+753a, U+77f3, U+798f, U+7f6e, U+8449, U+88fd, U+89b3, U+8a55, U+8ac7, U+8b77, U+8db3, U+8efd, U+8fd4, U+9031-9032, U+9580, U+9589, U+96d1, U+985e;
    }
    /* [111] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.111.woff2) format('woff2');
      unicode-range: U+2b, U+d7, U+300e-300f, U+4e07, U+4e8c, U+512a, U+5149, U+518d, U+5236, U+52b9, U+52d9, U+5468, U+578b, U+57fa, U+5b8c, U+5ba2, U+5c02, U+5de5, U+5f37, U+5f62, U+623b, U+63d0, U+652f, U+672a, U+6848, U+6d41, U+7136, U+7537, U+754c, U+76f4, U+79c1, U+7ba1, U+7d44, U+7d4c, U+7dcf, U+7dda, U+7de8, U+82b1, U+897f, U+8ca9, U+8cfc, U+904e, U+9664, U+982d, U+9858, U+98a8, U+9a13, U+ff13, U+ff5c;
    }
    /* [112] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.112.woff2) format('woff2');
      unicode-range: U+4e16, U+4e3b, U+4ea4, U+4f4d, U+4f4f, U+4f55, U+4f9b, U+5317, U+5358, U+539f, U+53c2, U+53e4, U+548c, U+571f, U+59cb, U+5cf6, U+5e38, U+63a2, U+63b2, U+6559, U+662d, U+679c, U+6c7a, U+72b6, U+7523, U+767d, U+770c, U+7a2e, U+7a3f, U+7a7a, U+7b2c, U+7b49, U+7d20, U+7d42, U+8003, U+8272, U+8a08, U+8aac, U+8cb7, U+8eab, U+8ee2, U+9054-9055, U+90fd, U+914d, U+91cd, U+969b, U+97f3, U+984c, U+ff06;
    }
    /* [113] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.113.woff2) format('woff2');
      unicode-range: U+26, U+5f, U+2026, U+203b, U+4e09, U+4eac, U+4ed5, U+4fa1, U+5143, U+5199, U+5207, U+53e3, U+53f7, U+5411, U+5473, U+5546, U+55b6, U+5929, U+597d, U+5bb9, U+5c11, U+5c4b, U+5ddd, U+5f97, U+5fc5, U+6295, U+6301, U+6307, U+671b, U+76f8, U+78ba, U+795e, U+7d30, U+7d39, U+7d50, U+7d9a, U+89e3, U+8a00, U+8a73, U+8a8d, U+8a9e, U+8aad, U+8abf, U+8cea, U+8eca, U+8ffd, U+904b, U+9650, U+ff11-ff12;
    }
    /* [114] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.114.woff2) format('woff2');
      unicode-range: U+3e, U+3005, U+4e0d, U+4e88, U+4ecb, U+4ee3, U+4ef6, U+4fdd, U+4fe1, U+500b, U+50cf, U+5186, U+5316, U+53d7, U+540c, U+544a, U+54e1, U+5728, U+58f2, U+591a, U+5973, U+5b89, U+5c71, U+5e02, U+5e97, U+5f15, U+5fc3, U+5fdc, U+601d, U+611b, U+611f, U+671f, U+6728, U+6765, U+683c, U+6b21, U+6ce8, U+6d3b, U+6d77, U+7530, U+7740, U+7acb, U+826f, U+8f09, U+8fbc, U+9001, U+9053, U+91ce, U+9762, U+98df;
    }
    /* [115] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.115.woff2) format('woff2');
      unicode-range: U+7c, U+3080, U+4ee5, U+5148, U+516c, U+521d, U+5225, U+529b, U+52a0, U+53ef, U+56de, U+56fd, U+5909, U+5b66, U+5b9f, U+5bb6, U+5bfe, U+5e73, U+5e83, U+5ea6, U+5f53, U+6027, U+610f, U+6210, U+6240, U+660e, U+66f4, U+66f8, U+6709, U+6771, U+697d, U+69d8, U+6a5f, U+6c34, U+6cbb, U+6cd5, U+73fe, U+756a, U+7684, U+771f, U+793a, U+7f8e, U+898f, U+8a2d, U+8a71, U+8fd1, U+9078, U+9577, U+96fb, U+ff5e;
    }
    /* [116] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.116.woff2) format('woff2');
      unicode-range: U+d, U+a9, U+3010-3011, U+30e2, U+4e0b, U+4eca, U+4ed6, U+4ed8, U+4f53, U+4f5c, U+4f7f, U+53d6, U+540d, U+54c1, U+5730, U+5916, U+5b50, U+5c0f, U+5f8c, U+624b, U+6570, U+6587, U+6599, U+691c, U+696d, U+7269, U+7279, U+7406, U+767a-767b, U+77e5, U+7d04, U+7d22, U+8005, U+80fd, U+81ea, U+8868, U+8981, U+89a7, U+901a, U+9023, U+90e8, U+91d1, U+9332, U+958b, U+96c6, U+9ad8, U+ff1a, U+ff1f;
    }
    /* [117] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.117.woff2) format('woff2');
      unicode-range: U+4e, U+a0, U+3000, U+300c-300d, U+4e00, U+4e0a, U+4e2d, U+4e8b, U+4eba, U+4f1a, U+5165, U+5168, U+5185, U+51fa, U+5206, U+5229, U+524d, U+52d5, U+5408, U+554f, U+5831, U+5834, U+5927, U+5b9a, U+5e74, U+5f0f, U+60c5, U+65b0, U+65b9, U+6642, U+6700, U+672c, U+682a, U+6b63, U+6c17, U+7121, U+751f, U+7528, U+753b, U+76ee, U+793e, U+884c, U+898b, U+8a18, U+9593, U+95a2, U+ff01, U+ff08-ff09;
    }
    /* [118] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.118.woff2) format('woff2');
      unicode-range: U+21-22, U+27-2a, U+2c-3b, U+3f, U+41-4d, U+4f-5d, U+61-7b, U+7d, U+ab, U+ae, U+b2-b3, U+b7, U+bb, U+c9, U+d6, U+d8, U+dc, U+e0-e5, U+e7-ed, U+ef, U+f1-f4, U+f6, U+f8, U+fa, U+fc-fd, U+103, U+14d, U+1b0, U+1ebf, U+1ec7, U+2013-2014, U+201c-201d, U+2039-203a, U+203c, U+2048-2049, U+2113, U+2122, U+65e5, U+6708, U+70b9;
    }
    /* [119] */
    @font-face {
      font-family: 'M PLUS Rounded 1c';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/mplusrounded1c/v10/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM064ZsPxeymz15fQEPFwkYlR0a4qBwdyXRVeV9klkI.119.woff2) format('woff2');
      unicode-range: U+20, U+3001-3002, U+3041-307f, U+3081-308f, U+3091-3093, U+3099-309a, U+309d-309e, U+30a1-30e1, U+30e3-30ed, U+30ef-30f0, U+30f2-30f4, U+30fb-30fe, U+ff0c, U+ff0e;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSV0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSx0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSt0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSd0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSZ0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSV0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSx0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSt0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSd0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSZ0me8iUI0lkQ.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `}
  />
)

export default Fonts
