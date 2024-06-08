import { ModalStatus, ModalState } from './context.js';

export type UPDATE_MODAL = {
  type: 'UPDATE_MODAL'
  payload: ModalStatus
}

export type OPEN_MODAL = {
  type: 'OPEN_MODAL'
  payload: {
    slug: string
  }
}

export type CLOSE_MODAL = {
  type: 'CLOSE_MODAL'
  payload: {
    slug: string
  }
}

export type TOGGLE_MODAL = {
  type: 'TOGGLE_MODAL'
  payload: {
    slug: string
  }
}

export type REMOVE_MODAL = {
  type: 'REMOVE_MODAL'
  payload: {
    slug: string
  }
}

export type CLOSE_LATEST_MODAL = {
  type: 'CLOSE_LATEST_MODAL'
  payload?: undefined
}

export type CLOSE_ALL_MODALS = {
  type: 'CLOSE_ALL_MODALS'
  payload?: undefined
}

export type Action = UPDATE_MODAL
  | OPEN_MODAL
  | REMOVE_MODAL
  | CLOSE_MODAL
  | TOGGLE_MODAL
  | CLOSE_LATEST_MODAL
  | CLOSE_ALL_MODALS;

const reducer = (
  state: ModalState,
  action: Action,
): ModalState => {
  let newState = { ...state };

  const {
    type,
    payload,
  } = action;

  switch (type) {
    case 'UPDATE_MODAL': {
      const {
        slug,
      } = payload;

      if (slug) {
        newState[slug] = {
          ...newState[slug],
          ...payload,
        };
      }

      break;
    }

    case 'OPEN_MODAL': {
      const {
        slug,
      } = payload;

      if (slug) {
        const isCurrentlyOpen = slug in newState && newState[slug].isOpen;

        if (!isCurrentlyOpen) {
          newState[slug] = {
            ...newState[slug],
            slug,
            openedOn: Date.now(),
            isOpen: true
          };
        }
      }

      break;
    }

    case 'TOGGLE_MODAL': {
      const {
        slug,
      } = payload;

      if (slug) {
        const isCurrentlyOpen = slug in newState && newState[slug].isOpen;

        newState[slug] = {
          ...newState[slug],
          slug,
          openedOn: !isCurrentlyOpen ? Date.now() : undefined,
          isOpen: !isCurrentlyOpen
        };
      }

      break;
    }

    case 'CLOSE_MODAL': {
      const {
        slug,
      } = payload;

      if (slug) {
        newState[slug] = {
          ...newState[slug],
          slug,
          openedOn: undefined,
          isOpen: false
        };
      }

      break;
    }

    case 'REMOVE_MODAL': {
      const {
        slug,
      } = payload;

      if (slug && slug in newState) {
        delete newState[slug];
      }

      break;
    }

    case 'CLOSE_LATEST_MODAL': {
      const latestModal = Object.keys(newState)
        .reduce((acc: ModalStatus | undefined, slug: string) => {
          const modal: ModalStatus = newState[slug];

          if (modal.isOpen && typeof modal.openedOn === 'number' && (!acc || (typeof acc.openedOn === 'number' && modal.openedOn > acc.openedOn))) {
            return modal;
          }

          return acc;
        }, undefined);

      if (latestModal) {
        newState[latestModal.slug] = {
          ...newState[latestModal.slug],
          isOpen: false,
          openedOn: undefined,
        }
      }

      break;
    }

    case 'CLOSE_ALL_MODALS': {
      newState = Object.entries((newState)).reduce((acc, [key, value]) => {
        acc[key] = {
          ...value,
          isOpen: false,
          openedOn: undefined,
        };

        return acc;
      }, {} as ModalState);

      break;
    }

    default: {
      break;
    }
  }

  return newState;
};

export default reducer;
