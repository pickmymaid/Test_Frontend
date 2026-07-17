import type { JobLanguage } from "@/types";
import Books from "../icons/Books";
import PenNib from "../icons/PenNib";
import UserSound from "../icons/UserSound";

function ProficiencyStatus({
  action,
  level,
}: {
  action: "Read" | "Write" | "Speak";
  level: 0 | 1 | 2 | 3;
}) {
  const levelMap = {
    0: "Good",
    1: "Excellent",
    2: "Fair",
    3: "Don't Know",
  };

  const iconMap = {
    Read: <Books />,
    Write: <PenNib />,
    Speak: <UserSound />,
  };

  if (!action || (!level && level !== 0)) {
    return null;
  }

  return (
    <div className="flex items-center  justify-between gap-1">
      <div className="flex items-center gap-1">
        {iconMap[action]}
        <span className="text-sm text-[#6f6f6f] font-bold">{action}</span>
      </div>
      <span className="text-sm text-[#6f6f6f]">{levelMap[level]}</span>
    </div>
  );
}

export function LanguagesSection({ languages }: { languages: JobLanguage[] }) {
  if (!languages || languages.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6">
      <h2 className="text-base font-semibold text-dark mb-5 flex items-center gap-2">
        Languages
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {languages.map((lang) => (
          <div
            key={lang._id || lang.id}
            className="flex flex-col rounded-xl border border-primary"
          >
            <span className="text-sm bg-primary-50 p-3 flex items-center justify-center font-bold text-dark rounded-[12px_12px_0_0]">
              {lang.name}
            </span>
            <div className="p-2 flex flex-col gap-2">
              <ProficiencyStatus
                action="Read"
                level={lang.read as 0 | 1 | 2 | 3}
              />
              <ProficiencyStatus
                action="Write"
                level={lang.write as 0 | 1 | 2 | 3}
              />
              <ProficiencyStatus
                action="Speak"
                level={lang.speak as 0 | 1 | 2 | 3}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
