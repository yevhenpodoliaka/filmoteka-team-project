import { createTeamModal } from './createTeamModal';
import { addTeamModal, openTeamModal } from '../handlers/teamModalOptions';

export { renderTeamModal };
async function renderTeamModal() {
  try {
    const teamModal = await createTeamModal();
    await addTeamModal(teamModal);
    openTeamModal();
  } catch (error) {
    console.log(error);
  }
}
