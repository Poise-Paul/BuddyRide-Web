import { Lock, Eye, CheckCircle, Smartphone } from "lucide-react";
import { Card, CardBody } from "@heroui/card";

const DriverSafety = () => {
  return (
    <div className="bg-[#F3F5F7] min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-NeuePlakBold text-black mb-4">
            Driving with Peace of Mind
          </h1>
          <p className="text-gray-600 font-NeuePlakRegular text-lg">
            We empower our partners with tools to stay safe and in control of
            every ride.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-4 border-none shadow-sm">
            <CardBody>
              <Lock className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-NeuePlakBold mb-3">
                Verified Passengers
              </h3>
              <p className="text-gray-600 font-NeuePlakRegular">
                Every passenger must verify their email and phone number. We
                also track trip history to ensure you are picking up trusted
                members of the community.
              </p>
            </CardBody>
          </Card>

          <Card className="p-4 border-none shadow-sm">
            <CardBody>
              <Eye className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-NeuePlakBold mb-3">
                Support On Every Trip
              </h3>
              <p className="text-gray-600 font-NeuePlakRegular">
                Chat with or email our support team straight from any trip —
                the trip&apos;s details go with your message, so on-road issues
                and disputes get sorted faster.
              </p>
            </CardBody>
          </Card>

          <Card className="p-4 border-none shadow-sm">
            <CardBody>
              <Smartphone className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-NeuePlakBold mb-3">
                In-App Chat & Trip Sharing
              </h3>
              <p className="text-gray-600 font-NeuePlakRegular">
                Message your passengers in the app to sort out pick-ups, and
                share your live trip with someone you trust while you drive.
              </p>
            </CardBody>
          </Card>

          <Card className="p-4 border-none shadow-sm">
            <CardBody>
              <CheckCircle className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-NeuePlakBold mb-3">
                Ride Documentation
              </h3>
              <p className="text-gray-600 font-NeuePlakRegular">
                Every journey is GPS-logged. In the event of an insurance claim
                or disagreement, we have a digital record to protect your side
                of the story.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="mt-16 p-8 bg-white rounded-3xl border border-gray-100">
          <h4 className="font-NeuePlakBold text-xl mb-4">Safe Driving Tips</h4>
          <p className="font-NeuePlakRegular text-gray-600 mb-4">
            Driving in the UK, Sweden, Nigeria or Canada? Keep your vehicle
            insured and roadworthy for where you drive, and in an emergency
            call 999 (UK), 112 (Sweden &amp; Nigeria) or 911 (Canada).
          </p>
          <ul className="space-y-3 font-NeuePlakRegular text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" /> Always confirm
              the passenger's name before they enter.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" /> Take regular
              breaks to stay alert.
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" /> Use a phone
              mount to keep your hands on the wheel.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DriverSafety;
