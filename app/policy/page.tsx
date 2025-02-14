import Link from "next/link";

export default function PolicyAndPrivacy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-white">
      <h1 className="text-3xl font-bold mb-6 ">Privacy and Policy</h1>

      <section className="mb-8">
        <p className="mb-4 text-gray-400">
          Your privacy is important to us. It is NB1&apos;s policy to respect
          your privacy regarding any information we may collect from you across
          our website,{" "}
          <a href="https://nb1.ai/" className="text-blue-600 hover:underline">
            NB1
          </a>
          , and other sites we own and operate.
        </p>
        <p className="mb-4 text-gray-400">
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we&apos;re collecting
          it and how it will be used.
        </p>
        <p className="mb-4 text-gray-400">
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store,
          we&apos;ll protect within commercially acceptable means to prevent
          loss and theft, as well as unauthorised access, disclosure, copying,
          use or modification.
        </p>
        <p className="mb-4 text-gray-400">
          We don&apos;t share any personally identifying information publicly or
          with third-parties, except when required to by law.
        </p>
        <p className="mb-4 text-gray-400">
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective{" "}
          <a
            href="https://privacypolicies.in/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policies
          </a>
          .
        </p>
        <p className="mb-4 text-gray-400">
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </p>
        <p className="mb-4 text-gray-400">
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </p>
      </section>

      <h2 className="text-2xl font-semibold mb-4 ">Cookie Policy for NB1</h2>

      <section className="mb-8 flex gap-1">
        <p className="mb-4 text-gray-400">
          This is the Cookie Policy for NB1, accessible from URL:
        </p>
        <Link href="https://nb1.ai/" target="_blank">
          https://nb1.ai/
        </Link>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 ">What Are Cookies</h3>
        <p className="mb-4 text-gray-400">
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or break certain
          elements of the sites functionality.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 ">How We Use Cookies</h3>
        <p className="mb-4 text-gray-400">
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 ">Disabling Cookies</h3>
        <p className="mb-4 text-gray-400">
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of this site. Therefore
          it is recommended that you do not disable cookies.
        </p>
      </section>

      {/* <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 ">
          The Cookies We Set
        </h3>

      </section> */}

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 ">Third Party Cookies</h3>
        <p className="mb-4 text-gray-400">
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 ">
          User&apos;s responsibilities
        </h3>
        <p className="mb-4 text-gray-400">
          The user undertakes the responsibility to make appropriate use of the
          contents and information offered on the site with enunciative, but not
          imitative, behaviour:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
          <li>
            A) Not to engage in activities that are illegal or contrary to good
            faith and public order;
          </li>
          <li>
            B) Not to spread propaganda or content of a racist, xenophobic or
            gambling nature, any type of illegal pornography, terrorist claims
            or against human rights;
          </li>
          <li>
            C) Do not cause damage to physical systems (hardware) and
            unattainable (software) of NB1, its suppliers or third parties, to
            introduce or disseminate computer viruses or any other hardware or
            software systems that are capable of causing damage previously
            mentioned.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 ">More information</h3>
        <p className="mb-4 text-gray-400">
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren&apos;t sure whether you
          need or not it&apos;s usually safer to leave cookies enabled in case
          it does interact with one of the features you use on our site.
        </p>
        <p className="mb-4 text-gray-400">
          This policy is effective as of 14 February 2025 19:59.
        </p>
      </section>
    </div>
  );
}
