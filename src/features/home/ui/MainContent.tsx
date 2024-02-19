import React from 'react';
import { AIInteractive } from 'widgets/ui/aIInteractiveCard/AIInteractive';

export const MainContent = () => {
  return (
    <div>
      <AIInteractive
        titleChildren={'맞춤형 AI 커리어 추천'}
        subChildren={'나에게 딱 맞는 커리어 가이드'}
        alt={'character'}
        src={'char/recruitime'}
      />
      <AIInteractive
        titleChildren={'맞춤형 AI 이력서 코칭'}
        subChildren={'막막한 자기소개서 첫 걸음부터'}
        alt={'note'}
        src={'icon/note'}
      />
    </div>
  );
};
