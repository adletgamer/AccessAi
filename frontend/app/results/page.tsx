import { useSearchParams } from 'next/navigation';
import SampleChart from '../../components/SampleChart';

export default function ResultsPage() {
  const params = useSearchParams();
  const profile = params?.get('profile') || '';

  // In a real app we'd POST profile to backend and display analysis.
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">Analysis Results</h2>
        <p className="mt-2 text-gray-700">
          {profile ? (
            <>Profile submitted:{' '}
              <span className="font-mono break-all">{profile.substring(0, 100)}{profile.length>100? '...' : ''}</span>
            </>
          ) : (
            'No profile text provided.'
          )}
        </p>
      </section>

      <section>
        <h3 className="text-xl font-medium">Skill graph (example)</h3>
        <div className="mt-4">
          <SampleChart />
        </div>
      </section>
    </div>
  );
}
