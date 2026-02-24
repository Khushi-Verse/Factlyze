export default function FAQ() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-10 py-20 roboto-condensed">
      <div className="max-w-3xl w-full">
        
        {/* Page Heading - Bold */}
        <h1 className="text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">

          <div>
            {/* Question - Bold */}
            <h3 className="font-bold text-lg ">
              How does Factlyze analyze news content?
            </h3>
            {/* Answer - Normal */}
            <p className="text-gray-400 leading-relaxed font-normal">
              Factlyze uses advanced AI models to evaluate emotional tone, language patterns,
              narrative framing, and potential bias indicators within news headlines and articles.
              The system identifies persuasive techniques and contextual signals that influence
              perception.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              Does Factlyze verify factual accuracy?
            </h3>
            <p className="text-gray-400 leading-relaxed font-normal">
              Factlyze focuses on analyzing framing, sentiment, and bias rather than acting as
              a fact-checking authority. Users are encouraged to cross-reference multiple
              credible sources for complete factual validation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              What makes Factlyze different from traditional news platforms?
            </h3>
            <p className="text-gray-400 leading-relaxed font-normal">
              Unlike news publishers, Factlyze does not produce content. It evaluates existing
              content to provide analytical insights, helping users interpret information more
              critically and independently.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              Is Factlyze politically neutral?
            </h3>
            <p className="text-gray-400 leading-relaxed font-normal">
              Factlyze is designed to remain politically neutral. The platform analyzes language
              structure and sentiment patterns without promoting any political ideology or
              viewpoint.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              How accurate is the AI analysis?
            </h3>
            <p className="text-gray-400 leading-relaxed font-normal">
              While Factlyze uses advanced language models trained on diverse datasets, AI
              analysis may not be perfect. Results are intended to support informed thinking,
              not replace human judgment.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              Is my data stored when I analyze an article?
            </h3>
            <p className="text-gray-400 leading-relaxed font-normal">
              Factlyze prioritizes user privacy. Any submitted content is processed securely,
              and we do not retain personal data beyond what is necessary for system
              functionality.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              Who can benefit from using Factlyze?
            </h3>
            <p className="text-gray-400 leading-relaxed font-normal">
              Students, journalists, researchers, and everyday readers can benefit from
              Factlyze. The platform is built for anyone seeking deeper clarity in the
              information they consume.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              Is Factlyze free to use?
            </h3>
            <p className="text-gray-400 leading-relaxed font-normal">
              Factlyze offers core analytical features for free. Future premium capabilities
              may include advanced reporting tools and deeper contextual breakdowns.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}