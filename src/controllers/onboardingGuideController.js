import { 
    createOnboardingGuideService,
    getOnboardingGuideByComponentService,
    getOnboardingGuideByIdService,
    updateOnboardingGuideSlidesService,
    updateOnboardingGuideTabsService,
    updateTabContentService,
    deleteOnboardingGuideService
} from '../services/onboardingGuideService.js';

export const createOnboardingGuide = async (req, res) => {
    const data = req.body;
    try {
        const onboardingGuide = await createOnboardingGuideService(data);
        res.status(201).json(onboardingGuide);
    } catch (error) {
        res.status(500).json({message: 'Error when creating Onboarding Guide: ' + error.message});
    }
};

export const getOnboardingGuideByComponent = async (req, res) => {
    const { componentName } = req.params;
    try {
        const onboardingGuide = await getOnboardingGuideByComponentService(componentName);
        res.status(200).json(onboardingGuide);
    } catch (error) {
        res.status(404).json({message: 'Onboarding Guide does not exist: ' + error.message});
    }
};


export const getOnboardingGuideById = async (req, res) => {
    const { id } = req.params;
    try {
        const onboardingGuide = await getOnboardingGuideByIdService(id);
        res.status(200).json(onboardingGuide);
    } catch (error) {
        res.status(404).json({message: 'Onboarding Guide does not exist: ' + error.message});
    }
};

export const updateOnboardingGuideSlides = async (req, res) => {

    const slides = req.body.slides;
    const id = req.params.id;
    try {
        const updatedGuide = await updateOnboardingGuideSlidesService(id, slides);
        res.status(200).json(updatedGuide);
    } catch (error) {
        res.status(404).json({
            message: 'Record does not exist or error when updating: ' + error.message,
        });
    }
};

export const updateOnboardingGuideTabs = async (req, res) => {
    const tabs = req.body.tabs;
    const id = req.params.id;
    try {
        const updatedGuide = await updateOnboardingGuideTabsService(id, tabs);
        res.status(200).json(updatedGuide);
    } catch (error) {
        res.status(404).json({
            message: 'Record does not exist or error when updating: ' + error.message,
        });
    }
};

export const updateTabContent = async (req, res) => {
    console.log(req.body);
    const {content, tabOrder}  = req.body;
    const id = req.params.id;
    try {
        const updatedGuide = await updateTabContentService(id, tabOrder, content);
        res.status(200).json(updatedGuide);
    } catch (error) {
        res.status(404).json({
            message: 'Record does not exist or error when updating: ' + error.message,
        });
    }
};

export const deleteOnboardingGuide = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGuide = await deleteOnboardingGuideService(id);
        res.status(200).json(deletedGuide);
    } catch (error) {
        res.status(404).json({
            message: 'Record does not exist or error when deleting: ' + error.message,
        });
    }
};