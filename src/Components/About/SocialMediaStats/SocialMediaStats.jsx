import React from 'react';

const stats = [
  { platform: 'Instagram', count: '12K+' },
  { platform: 'Facebook', count: '9.5K' },
  { platform: 'Twitter', count: '7.2K' },
  { platform: 'LinkedIn', count: '5K' },
];

const SocialMediaStats = () => {
  return (
    <section className="py-20 bg-violet-100 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-violet-800 mb-8">Follow Us</h2>
      <div className="flex justify-center gap-10 flex-wrap text-violet-900 text-lg font-medium">
        {stats.map((stat, index) => (
          <div key={index} data-aos="flip-left" data-aos-delay={index * 100}>
            <p className="text-4xl font-bold text-violet-700">{stat.count}</p>
            <p>{stat.platform}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaStats;
