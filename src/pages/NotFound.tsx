import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';
import CardComponent from '../components/CardComponent';

const NotFound: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50 dark:bg-onyx-950 min-h-[70vh] flex items-center justify-center px-4">
      <CardComponent className="max-w-md w-full text-center p-8 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-volt-gold/10 border border-volt-gold/30 text-volt-gold flex items-center justify-center mx-auto">
          <Zap size={32} className="fill-volt-gold" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-black font-display text-neutral-900 dark:text-white">
            404
          </h1>
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
            Node Not Found
          </h2>
          <p className="text-xs text-neutral-500 font-mono">
            The page coordinate you are searching for does not exist in the VoltEdge Innovation Community network.
          </p>
        </div>
        <Link to="/" className="inline-block w-full">
          <button className="btn btn-primary w-full text-xs font-mono font-bold flex items-center justify-center gap-2">
            <ArrowLeft size={16} />
            <span>Return to Homepage</span>
          </button>
        </Link>
      </CardComponent>
    </div>
  );
};

export default NotFound;
