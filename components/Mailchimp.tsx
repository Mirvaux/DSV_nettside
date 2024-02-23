// components/Mailchimp.tsx
import React from 'react';
import styles from './Mailchimp.module.css';

const Mailchimp = () => {
  return (
    <div className="p-8 rounded-2xl">
      {/* It's better to move external styles to your global stylesheet or import them in _app.tsx */}
      <div id="mc_embed_signup">
        <form
          action="https://stilledal.us12.list-manage.com/subscribe/post?u=74701088e2642e62956da4b75&amp;id=1761bc8472&amp;f_id=00e748e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="font-cormorant text-2xl mb-8">
            <h2>Meld deg på Den Stille Dal vel's nyhetsbrev:</h2>
            </div>
            <div className="mb-4">
              <label htmlFor="mce-EMAIL">E-post <span className={styles.asterisk}>*</span></label>
              <input type="email" name="EMAIL" className="p-2 rounded-2xl my-2 border-gray-500 border-solid border min-w-full" id="mce-EMAIL" required />
            </div>
            <div className="my-4">
              <label htmlFor="mce-FNAME">Fornavn </label>
              <input type="text" name="FNAME" className="p-2 rounded-2xl my-2 border-gray-500 border-solid border min-w-full" id="mce-FNAME" />
            </div>
            <div className="my-4">
              <label htmlFor="mce-LNAME">Etternavn </label>
              <input type="text" name="LNAME" className="p-2 rounded-2xl my-2 border-gray-500 border-solid border min-w-full" id="mce-LNAME" />
            </div>
            <div id="mce-responses" className={`${styles.clear} ${styles.foot}`}>
              <div className={styles.response} id="mce-error-response" style={{ display: 'none' }}></div>
              <div className={styles.response} id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
              <div className="bt-4">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="bg-gray-100 my-4 border font-karla text-black border-gray-800 hover:border-slate-400 px-5 py-2.5 uppercase rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-800 hover:text-gray-100" value="Abbonér" />
              </div>         
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mailchimp;
