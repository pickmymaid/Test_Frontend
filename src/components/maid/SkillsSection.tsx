import React from "react";

export default function SkillsSection({ skills }: { skills: string[] }) {
  return (
    <div className="bg-white rounded-3xl p-6 h-full">
      <h2 className="text-base font-semibold text-dark mb-5 flex items-center gap-2">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-[#f5f5f5] text-xs font-medium rounded-xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
