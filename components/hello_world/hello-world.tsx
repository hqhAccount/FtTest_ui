// components/hello-world/hello-world.tsx
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const render = () => {
      return (
        <>
          <div>hello world</div>
        </>
      );
    };
    return render;
  },
});

