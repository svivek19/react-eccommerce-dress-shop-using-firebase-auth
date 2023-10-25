import {
  ArrowPathIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "24/7 Customer Service",
    description: `Our 24/7 customer service is like having a dedicated support team at your beck and call, day or night. We're here to assist you anytime you need help or have a question.`,
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: "SSL Certificates",
    description:
      '"SSL certificates, the guardians of online security, encrypt your data and ensure safe interactions with websites.',
    icon: LockClosedIcon,
  },
  {
    name: "Easy Exchange and Refund",
    description: `With our easy exchange and refund policy, you're never stuck with a product that doesn't meet your needs. We believe in flexibility and customer satisfaction above all else.`,
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "With advanced payment security, your transactions are fortified against even the most sophisticated threats. Rest easy knowing that your financial information is in safe hands.",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white my-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 md:my-16">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-400">
            Delivery faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Swift shipping, stylish clothing – the perfect combo!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Embrace the thrill of instant fashion gratification - unwrap your
            dreams with our lightning-fast delivery.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
