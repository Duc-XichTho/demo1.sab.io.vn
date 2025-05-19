import express from 'express';
import { 
    getOnboardingGuideByComponent, 
    createOnboardingGuide, 
    updateOnboardingGuideSlides, 
    updateOnboardingGuideTabs, 
    updateTabContent ,
    deleteOnboardingGuide
} from '../controllers/onboardingGuideController.js';

const router = express.Router();


router.get('/:componentName', getOnboardingGuideByComponent);


router.post('/',  createOnboardingGuide);

router.put('/:id/slides',  updateOnboardingGuideSlides);

router.put('/:id/tabs',  updateOnboardingGuideTabs);


router.put('/:id/tab-content',  updateTabContent);

router.delete('/:id',  deleteOnboardingGuide);

export default router; 