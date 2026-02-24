export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-6 md:px-10 py-20 roboto-condensed">
      <div className="max-w-3xl w-full space-y-8">

       
        <h1 className="text-4xl font-bold">
          About Factlyze
        </h1>

       
        <div className="italic space-y-8">

          <p className="leading-relaxed">
            In an era where information moves faster than verification, Factlyze was built 
            with a simple yet powerful mission to help people see beyond headlines.
          </p>

          <p className=" leading-relaxed">
            Factlyze is an intelligent analysis platform designed to evaluate news content 
            with clarity, transparency, and contextual depth. By combining advanced AI-driven 
            language models with structured analytical frameworks, we transform raw headlines 
            into meaningful insights highlighting sentiment, bias indicators, emotional 
            triggers, and narrative patterns that often go unnoticed.
          </p>

          <div className="space-y-4">
            <p className=" leading-relaxed">
              We believe that informed decisions begin with informed understanding. 
              Factlyze empowers users to critically engage with the information they consume by:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-2 not-italic">
              <li>Detecting emotional language and persuasive framing</li>
              <li>Identifying potential bias and narrative slants</li>
              <li>Providing contextual clarity around trending topics</li>
              <li>Encouraging evidence-based thinking</li>
            </ul>
          </div>

          <p className=" leading-relaxed">
            Our platform is built with scalability, security, and performance at its core, 
            leveraging modern AI infrastructure to deliver fast and reliable analysis. 
            Every feature is designed with one goal in mind enhancing digital literacy 
            without overwhelming the user.
          </p>

          <div className="space-y-2">
            <p className=" font-medium not-italic">
              Factlyze is not here to tell you what to think.
            </p>
            <p className="italic">
              It is here to help you think clearly.
            </p>
          </div>

          <p className=" leading-relaxed">
            As misinformation evolves, so must awareness. Factlyze stands at the intersection 
            of technology and responsibility redefining how we interpret the world, 
            one headline at a time.
          </p>

        </div>

      </div>
    </div>
  )
}