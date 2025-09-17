import { AppLayout } from "@/components/layout/AppLayout";
import { FilesPage as FilesPageComponent } from "@/components/files/FilesPage";

const FilesPage = () => {
  return (
    <AppLayout>
      <FilesPageComponent />
    </AppLayout>
  );
};

export default FilesPage;