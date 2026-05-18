import { translate } from '@docusaurus/Translate';
import { useStoreValue, setStoreValue } from '@site/src/stores/queryStore';
import Input from '@site/src/components/ui/Input';
import FieldWrapper from '@site/src/components/ui/FieldWrapper';

export default function QueryForm() {
  const holderValue = useStoreValue('holder');
  const positionValue = useStoreValue('position');
  const labelHolder = translate({ id: 'ui.holderName', message: 'Holder Name' });
  const descHolder = translate({ id: 'ui.holderNameDescription', message: 'The name of the holder (e.g. money, exp)' });
  const labelPosition = translate({ id: 'ui.position', message: 'Position' });
  const descPosition = translate({ id: 'ui.positionDescription', message: 'The position in the leaderboard (must be >= 1)' });

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-container">
      <FieldWrapper
        label={labelHolder}
        description={descHolder}
      >
        {(id) => (
          <Input
            id={id}
            value={holderValue}
            onChange={(e) => setStoreValue('holder', e.target.value)}
          />
        )}
      </FieldWrapper>

      <FieldWrapper
        label={labelPosition}
        description={descPosition}
      >
        {(id) => (
          <Input
            id={id}
            type="number"
            value={positionValue}
            onChange={(e) => setStoreValue('position', e.target.value)}
          />
        )}
      </FieldWrapper>


    </form>
  );
}
